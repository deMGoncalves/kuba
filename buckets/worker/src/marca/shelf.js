import supabase from '@kuba/supabase'

export default async function () {
  const { data, error } = await supabase
    .from('marca')
    .select('*')
    .order('nome', { ascending: true })

  return new Response(JSON.stringify({ data, error }))
}
