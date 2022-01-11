import supabase from '@kuba/supabase'

export default async function (request, response) {
  const { slug } = JSON.parse(request.body)
  const { data, error } = await supabase
    .from('shape')
    .select(`
      *,
      tipo (*),
      marca!inner(*, origem (*)),
      tamanho (*),
      material (*),
      wheelbase (*),
      montagem (*),
      flag (*)
    `)
    .eq('marca.slug', slug)

  response.setHeader('Cache-Control', 'public, max-age=86400')
  response.json({ data, error })
}
