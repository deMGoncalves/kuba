import * as f from '@kuba/f'
import { createClient } from '@kuba/supabase'

export async function onRequestPost (context) {
  const supabase = createClient(context)
  const params = await context.request.json()

  const { data } = await supabase
    .from('shape')
    .select('views')
    .eq('slug', params.slug)
    .single()

  const { error } = await supabase
    .from('shape')
    .update({ views: f.inc(data.views) })
    .eq('slug', params.slug)

  return new Response(JSON.stringify({ error }))
}
