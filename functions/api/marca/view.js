import { createClient } from '@supabase/supabase-js'

export async function onRequestPost (context) {
  const supabase = createClient(
    context.env.API_URL,
    context.env.API_KEY
  )

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
