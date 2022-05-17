import supabase from '@kuba/supabase'

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
    .range(1, 24)

  return new Response(JSON.stringify({ data, error }))
}
