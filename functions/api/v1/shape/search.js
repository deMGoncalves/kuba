import * as f from '@kuba/f'
import { createClient } from '@kuba/supabase'
import pagination from './pagination'

export async function onRequestPost (context) {
  const supabase = createClient(context)
  const params = await context.request.json()

  const query = f
    .from(params.q)
    .pipe(f.or(f.__, ''))
    .pipe(f.split(f.__, ' '))
    .pipe(f.map(f.__, w => `'${w}'`))
    .pipe(f.join(f.__, ' | '))
    .done()

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
    .textSearch('text', query)
    .range(...pagination(params))

  return new Response(JSON.stringify({ data, error }))
}
