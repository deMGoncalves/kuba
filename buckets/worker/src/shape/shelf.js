import { createClient } from '@kuba/supabase'
import pagination from './pagination'

export async function onRequestPost (context) {
  const supabase = createClient(context)
  const params = await context.request.json()

  let query = supabase
    .from('shape')
    .select(`
      *,
      flag (*),
      ${params.flex?.length ? 'flex!inner(*)' : 'flex (*)'},
      ${params.origem?.length ? 'marca!inner(*, origem!inner(*))' : params.marca?.length ? 'marca!inner(*, origem (*))' : 'marca (*, origem (*))'},
      ${params.material?.length ? 'material!inner(*)' : 'material (*)'},
      ${params.montagem?.length ? 'montagem!inner(*)' : 'montagem (*)'},
      ${params.tamanho?.length ? 'tamanho!inner(*)' : 'tamanho (*)'},
      ${params.tipo?.length ? 'tipo!inner(*)' : 'tipo (*)'},
      wheelbase (*)
    `)
    .order('views', { ascending: false })
    .range(...pagination(params))

  if (params.concave) { query = query.eq('concave', true) }
  if (params.flares) { query = query.eq('wheel_flares', true) }
  if (params.nose) { query = query.eq('nose', true) }
  if (params.pro) { query = query.eq('pro_model', true) }
  if (params.recorte) { query = query.eq('cut_outs', true) }
  if (params.simetrico) { query = query.eq('simetrico', true) }
  if (params.tail) { query = query.eq('tail', true) }
  if (params.wells) { query = query.eq('wheel_wells', true) }

  if (params.flex?.length) { query = query.in('flex.valor', params.flex) }
  if (params.marca?.length) { query = query.in('marca.nome', params.marca) }
  if (params.material?.length) { query = query.in('material.valor', params.material) }
  if (params.montagem?.length) { query = query.in('montagem.valor', params.montagem) }
  if (params.origem?.length) { query = query.in('marca.origem.valor', params.origem) }
  if (params.tamanho?.length) { query = query.in('tamanho.valor', params.tamanho) }
  if (params.tipo?.length) { query = query.in('tipo.valor', params.tipo) }

  const { data, error } = await query

  return new Response(JSON.stringify({ data, error }))
}
