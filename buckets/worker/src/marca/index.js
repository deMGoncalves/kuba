import { createClient } from '@kuba/supabase'

export async function onRequestPost (context) {
  const supabase = createClient(context)
  const params = await context.request.json()

  const { data, error } = await supabase
    .from('marca')
    .select('*, origem (*)')
    .eq('slug', params.slug)
    .single()

  return new Response(JSON.stringify({ data, error }))
}
