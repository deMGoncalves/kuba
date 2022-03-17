import { createClient } from '@kuba/supabase'

export async function onRequestPost (context) {
  const supabase = createClient(context)

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
