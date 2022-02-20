import supabase from '@kuba/supabase'

export default async function (request, response) {
  const { concave, flares, material, nose, origem, page, pro, size = 24, tail, tamanho, wells } = JSON.parse(request.body)
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

  if (concave) { query = query.eq('concave', true) }
  if (flares) { query = query.eq('wheel_flares', true) }
  if (material?.length) { query = query.in('material.valor', material) }
  if (nose) { query = query.eq('nose', true) }
  if (origem?.length) { query = query.in('marca.origem.valor', origem) }
  if (pro) { query = query.eq('pro_model', true) }
  if (tail) { query = query.eq('tail', true) }
  if (tamanho?.length) { query = query.in('tamanho.valor', tamanho) }
  if (wells) { query = query.eq('wheel_wells', true) }

  const { data, error } = await query

  response.setHeader('Cache-Control', 'public, max-age=86400')
  response.json({ data, error })
}
