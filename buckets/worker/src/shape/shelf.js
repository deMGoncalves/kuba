import pagination from './pagination'
import supabase from '@kuba/supabase'

export default async function (request) {
  const body = await request.json()

  let query = supabase
    .from('shape')
    .select(`
      *,
      flag (*),
      ${body.flex?.length ? 'flex!inner(*)' : 'flex (*)'},
      ${body.origem?.length ? 'marca!inner(*, origem!inner(*))' : body.marca?.length ? 'marca!inner(*, origem (*))' : 'marca (*, origem (*))'},
      ${body.material?.length ? 'material!inner(*)' : 'material (*)'},
      ${body.montagem?.length ? 'montagem!inner(*)' : 'montagem (*)'},
      ${body.tamanho?.length ? 'tamanho!inner(*)' : 'tamanho (*)'},
      ${body.tipo?.length ? 'tipo!inner(*)' : 'tipo (*)'},
      wheelbase (*)
    `)
    .order('views', { ascending: false })
    .range(...pagination(body))

  if (body.concave) { query = query.eq('concave', true) }
  if (body.flares) { query = query.eq('wheel_flares', true) }
  if (body.nose) { query = query.eq('nose', true) }
  if (body.pro) { query = query.eq('pro_model', true) }
  if (body.recorte) { query = query.eq('cut_outs', true) }
  if (body.simetrico) { query = query.eq('simetrico', true) }
  if (body.tail) { query = query.eq('tail', true) }
  if (body.wells) { query = query.eq('wheel_wells', true) }

  if (body.flex?.length) { query = query.in('flex.valor', body.flex) }
  if (body.marca?.length) { query = query.in('marca.nome', body.marca) }
  if (body.material?.length) { query = query.in('material.valor', body.material) }
  if (body.montagem?.length) { query = query.in('montagem.valor', body.montagem) }
  if (body.origem?.length) { query = query.in('marca.origem.valor', body.origem) }
  if (body.tamanho?.length) { query = query.in('tamanho.valor', body.tamanho) }
  if (body.tipo?.length) { query = query.in('tipo.valor', body.tipo) }

  const { data, error } = await query

  return new Response(
    JSON.stringify({ data, error }),
    {
      headers: {
        'Access-Control-Allow-Origin': 'https://kuba.ink',
        'Access-Control-Allow-Methods': 'GET,HEAD,POST,OPTIONS'
      }
    }
  )
}
