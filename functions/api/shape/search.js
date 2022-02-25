import supabase from '@kuba/supabase'

export default async function (request, response) {
  const { page, q, size = 24 } = JSON.parse(request.body)
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
    .textSearch(
      'text',
      q
        .split(' ')
        .map(w => `'${w}'`)
        .join(' | ')
    )
    .range(
      page * size - size,
      page * size - 1
    )

  response.setHeader('Cache-Control', 'public, max-age=86400')
  response.json({ data, error })
}
