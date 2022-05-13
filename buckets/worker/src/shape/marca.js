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
      marca!inner(*, origem (*)),
      material (*),
      moeda(*),
      montagem (*),
      tamanho (*),
      tipo (*),
      wheelbase (*)
    `)
    .eq('marca.slug', params.slug)
    .order('views', { ascending: false })
    .range(...pagination(params))

  return new Response(JSON.stringify({ data, error }))
}
