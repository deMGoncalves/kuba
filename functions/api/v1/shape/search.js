import { createClient } from '@supabase/supabase-js'

export async function onRequestPost (context) {
  const supabase = createClient(
    context.env.API_URL,
    context.env.API_KEY
  )

  const {
    page = 1,
    q,
    size = 24,
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
    .textSearch(
      'text',
      q
        .split(' ')
        .map(w => `'${w}'`)
        .join(' | ')
    )
    .range(
      page * size - size,
      page * size - 1
    )

  return new Response(JSON.stringify({ data, error }))
}
