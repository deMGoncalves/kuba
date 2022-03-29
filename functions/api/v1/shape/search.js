import { createClient } from '@kuba/supabase'
import pagination from './pagination'

export async function onRequestPost (context) {
  const supabase = createClient(context)
  const params = await context.request.json()

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
      params.q
        .split(' ')
        .map(w => `'${w}'`)
        .join(' | ')
    )
    .range(...pagination(params))

  return new Response(JSON.stringify({ data, error }))
}
