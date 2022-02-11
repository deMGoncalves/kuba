import supabase from '@kuba/supabase'

export default async function (request, response) {
  const { material, tamanho } = JSON.parse(request.body)
  const { data, error } = await supabase
    .from('shape')
    .select(`
      *,
      flag (*),
      marca (*, origem (*)),
      material (*),
      moeda(*),
      montagem (*),
      tamanho (*),
      tipo (*),
      wheelbase (*)
    `)
    .eq('tamanho', tamanho)
    .in('material.id', material)
    .limit(4)

  response.setHeader('Cache-Control', 'public, max-age=86400')
  response.json({ data, error })
}
