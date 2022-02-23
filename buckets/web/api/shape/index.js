import supabase from '@kuba/supabase'

export default async function (request, response) {
  const { slug } = JSON.parse(request.body)
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

  response.setHeader('Cache-Control', 'public, max-age=86400')
  response.json({ data, error })
}
