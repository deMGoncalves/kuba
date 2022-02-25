import { createClient } from '@supabase/supabase-js'

export async function onRequestPost (context) {
  const supabase = createClient(
    context.env.API_URL,
    context.env.API_KEY
  )

  const {
    page = 1,
    size = 24,
    slug
  } = await context.request.json()

  const { data, error } = await supabase
    .from('shape')
    .select(`
      *,
      flag (*),
      flex (*),
      marca!inner(*, origem (*)),
      material (*),
      moeda(*),
      montagem (*),
      tamanho (*),
      tipo (*),
      wheelbase (*)
    `)
    .eq('marca.slug', slug)
    .order('views', { ascending: false })
    .range(
      page * size - size,
      page * size - 1
    )

  return new Response(JSON.stringify({ data, error }))
}
