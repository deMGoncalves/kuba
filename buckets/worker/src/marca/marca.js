import { createClient } from '@kuba/supabase'

export default async function (request) {
  const env = { API_KEY, API_URL }
  const supabase = createClient({ env })

  const { data, error } = await supabase
    .from('marca')
    .select('*, origem (*)')
    .eq('slug', request.params.slug)
    .single()

  return new Response(JSON.stringify({ data, error }))
}
