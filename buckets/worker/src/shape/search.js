import * as f from '@kuba/f'
import supabase from '@kuba/supabase'

export default async function (request) {
  const { q } = request.query
  const query = f
    .from(q)
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
    .range(1, 24)

  return new Response(JSON.stringify({ data, error }))
}
