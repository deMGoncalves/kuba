import supabase from '@kuba/supabase'

export default async function (request, response) {
  const { page, size = 24, slug } = JSON.parse(request.body)
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

  response.setHeader('Cache-Control', 'public, max-age=86400')
  response.json({ data, error })
}
