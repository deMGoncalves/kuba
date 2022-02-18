import supabase from '@kuba/supabase'

export default async function (request, response) {
  const { material, nose, origem, page, size = 24, tail, tamanho } = JSON.parse(request.body)
  let query = supabase
    .from('shape')
    .select(`
      *,
      tipo (*),
      marca!inner(*, origem!inner(*)),
      tamanho!inner(*),
      material!inner(*),
      wheelbase (*),
      montagem (*),
      flag (*)
    `)
    .range(
      page * size - size,
      page * size - 1
    )

  if (material?.length) { query = query.in('material.valor', material) }
  if (nose) { query = query.eq('nose', true) }
  if (origem?.length) { query = query.in('marca.origem.valor', origem) }
  if (tail) { query = query.eq('tail', true) }
  if (tamanho?.length) { query = query.in('tamanho.valor', tamanho) }

  const { data, error } = await query

  response.setHeader('Cache-Control', 'public, max-age=86400')
  response.json({ data, error })
}
