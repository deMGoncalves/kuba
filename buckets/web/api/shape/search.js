import supabase from '@kuba/supabase'

export default async function (request, response) {
  const { q } = JSON.parse(request.body)
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
    .textSearch(
      'text',
      q
        .split(' ')
        .map(w => `'${w}'`)
        .join(' | ')
    )
    .limit(24)

  response.setHeader('Cache-Control', 'public, max-age=86400')
  response.json({ data, error })
}
