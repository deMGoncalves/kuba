import { createClient } from '@supabase/supabase-js'

export async function onRequestPost (context) {
  const supabase = createClient(
    context.env.API_URL,
    context.env.API_KEY
  )

  const {
    slug
  } = await context.request.json()

  const { data, error } = await supabase
    .from('shape')
    .select(`
      *,
      flag (*),
      flex (*),
      marca (*, origem (*)),
      material (*),
      moeda(*),
      montagem (*),
      tamanho (*),
      tipo (*),
      wheelbase (*)
    `)
    .eq('slug', slug)
    .single()

  return new Response(JSON.stringify({ data, error }))
}
