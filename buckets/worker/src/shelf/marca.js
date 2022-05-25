import range from './range'
import supabase from '@kuba/supabase'

export default async function (request) {
  const body = await request.json()
  const { start, end } = range(body)

  const { data, error } = await supabase
    .from('marca')
    .select('*, origem (*)')
    .range(start, end)

  return new Response(JSON.stringify({ data, error }))
}
