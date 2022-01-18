import supabase from '@kuba/supabase'

export default async function (request, response) {
  const { material, slug, tamanho } = JSON.parse(request.body)
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
    .neq('slug', slug)
    .eq('tamanho', tamanho)
    .in('material.id', material)
    .limit(3)

  response.setHeader('Cache-Control', 'public, max-age=86400')
  response.json({ data, error })
}
