import supabase from '@kuba/supabase'

export default async function (request, response) {
  const { slug } = JSON.parse(request.body)
  const { data = [], error } = await supabase
    .from('shape')
    .select(`
      *,
      tipo (*),
      marca (*, origem (*)),
      tamanho (*),
      material (*),
      wheelbase (*),
      montagem (*),
      flag (*)
    `)
    .eq('slug', slug)

  response.json({ data: data.shift(), error })
}
