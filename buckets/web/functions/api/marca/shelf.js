import supabase from '@kuba/supabase'

export default async function (_request, response) {
  const { data, error } = await supabase
    .from('marca')
    .select(`
      *,
      origem (*)
    `)
    .order('nome', {
      ascending: true
    })

  response.setHeader('Cache-Control', 'public, max-age=86400')
  response.json({ data, error })
}
