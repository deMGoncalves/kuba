import supabase from '@kuba/supabase'

export default async function (request, response) {
  const { material, tamanho } = JSON.parse(request.body)
  const { data, error } = await supabase
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
    .eq('tamanho.id', tamanho)
    .in('material.id', material)
    .limit(4)

  response.setHeader('Cache-Control', 'public, max-age=86400')
  response.json({ data, error })
}
