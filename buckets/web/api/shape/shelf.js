import supabase from '@kuba/supabase'

export default async function (_request, response) {
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

  response.setHeader('Cache-Control', '86400')
  response.json({ data, error })
}
