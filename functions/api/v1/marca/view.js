import { createClient } from '@kuba/supabase'

export async function onRequestPost (context) {
  const supabase = createClient(context)

  const {
    slug
  } = await context.request.json()

  const { data } = await supabase
    .from('marca')
    .select('views')
    .eq('slug', slug)
    .single()

  const { error } = await supabase
    .from('marca')
    .update({ views: data.views + 1 })
    .eq('slug', slug)

  return new Response(JSON.stringify({ error }))
}
