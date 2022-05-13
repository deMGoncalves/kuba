import * as f from '@kuba/f'
import { createClient } from '@kuba/supabase'

export async function onRequestPost (context) {
  const supabase = createClient(context)
  const params = await context.request.json()

  const { data } = await supabase
    .from('marca')
    .select('views')
    .eq('slug', params.slug)
    .single()

  const { error } = await supabase
    .from('marca')
    .update({ views: f.inc(data.views) })
    .eq('slug', params.slug)

  return new Response(JSON.stringify({ error }))
}
