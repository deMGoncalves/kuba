import { createClient } from '@supabase/supabase-js'

export async function onRequestPost (context) {
  const supabase = createClient(
    context.env.API_URL,
    context.env.API_KEY
  )

  const { data, error } = await supabase
    .from('marca')
    .select(`
      *,
      origem (*)
    `)
    .order('nome', {
      ascending: true
    })

  return new Response(JSON.stringify({ data, error }))
}
