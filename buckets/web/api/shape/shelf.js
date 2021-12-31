import supabase from '@kuba/supabase'

export default async function (_request, response) {
  const { data, error } = await supabase
    .from('shape')
    .select(`
      id,
      tipo (valor),
      marca (nome, descricao, site, origem (valor)),
      tamanho (valor),
      material (valor),
      wheelbase (valor) as wheelbase,
      montagem (valor),
      flag (valor),
      lixa,
      nose,
      tail,
      concave,
      modelo,
      laminas
    `)

  response.json({ data, error })
}
