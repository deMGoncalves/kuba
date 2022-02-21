import supabase from '@kuba/supabase'

export default async function (request, response) {
  const { concave, flares, flex, material, nose, origem, page, pro, recorte, simetrico, size = 24, tail, tamanho, wells } = JSON.parse(request.body)
  let query = supabase
    .from('shape')
    .select(`
      *,
      flag (*),
      ${flex?.length ? 'flex!inner(*)' : 'flex (*)'},
      ${origem?.length ? 'marca!inner(*, origem!inner(*))' : 'marca (*, origem (*))'},
      ${material?.length ? 'material!inner(*)' : 'material (*)'},
      montagem (*),
      ${tamanho?.length ? 'tamanho!inner(*)' : 'tamanho (*)'},
      tipo (*),
      wheelbase (*)
    `)
    .range(
      page * size - size,
      page * size - 1
    )

  if (concave) { query = query.eq('concave', true) }
  if (flares) { query = query.eq('wheel_flares', true) }
  if (nose) { query = query.eq('nose', true) }
  if (pro) { query = query.eq('pro_model', true) }
  if (recorte) { query = query.eq('cut_outs', true) }
  if (simetrico) { query = query.eq('simetrico', true) }
  if (tail) { query = query.eq('tail', true) }
  if (wells) { query = query.eq('wheel_wells', true) }

  if (flex?.length) { query = query.in('flex.valor', flex) }
  if (material?.length) { query = query.in('material.valor', material) }
  if (origem?.length) { query = query.in('marca.origem.valor', origem) }
  if (tamanho?.length) { query = query.in('tamanho.valor', tamanho) }

  const { data, error } = await query

  response.setHeader('Cache-Control', 'public, max-age=86400')
  response.json({ data, error })
}
