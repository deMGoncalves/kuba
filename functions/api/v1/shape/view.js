import * as f from '@kuba/f'
import { createClient } from '@kuba/supabase'

export async function onRequestPost (context) {
  const supabase = createClient(context)

  const {
    slug
  } = await context.request.json()

  const { data } = await supabase
    .from('shape')
    .select('views')
    .eq('slug', slug)
    .single()

  const { error } = await supabase
    .from('shape')
    .update({ views: f.inc(data.views) })
    .eq('slug', slug)

  return new Response(JSON.stringify({ error }))
}
