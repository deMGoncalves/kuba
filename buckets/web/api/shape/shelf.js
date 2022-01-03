import supabase from '@kuba/supabase'

export default async function (_request, response) {
  const { data, error } = await supabase
    .from('shape')
    .select(`
      *,
      tipo (valor),
      marca (nome, descricao, site, origem (valor)),
      tamanho (valor),
      material (valor),
      wheelbase (valor),
      montagem (valor),
      flag (valor)
    `)

  response.json({ data, error })
}
