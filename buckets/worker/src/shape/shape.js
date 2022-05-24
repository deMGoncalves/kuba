import supabase from '@kuba/supabase'

export default async function (request) {
  const { slug } = request.params
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

  return new Response(
    JSON.stringify({ data, error }),
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,HEAD,POST,OPTIONS'
      }
    }
  )
}
