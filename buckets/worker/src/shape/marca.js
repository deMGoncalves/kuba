import supabase from '@kuba/supabase'
import pagination from './pagination'

export default async function (request) {
  const { slug } = await request.params
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
    .range(...pagination(request.params))

  return new Response(JSON.stringify({ data, error }))
}
