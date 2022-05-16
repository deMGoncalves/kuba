import supabase from '@kuba/supabase'

export default async function (request) {
  const { data, error } = await supabase
    .from('marca')
    .select('*, origem (*)')
    .eq('slug', request.params.slug)
    .single()

  return new Response(JSON.stringify({ data, error }))
}
