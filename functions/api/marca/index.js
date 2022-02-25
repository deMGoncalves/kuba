import supabase from '@kuba/supabase'

export default async function (request, response) {
  const { slug } = JSON.parse(request.body)
  const { data, error } = await supabase
    .from('marca')
    .select(`
      *,
      origem (*)
    `)
    .eq('slug', slug)
    .limit(1)
    .single()

  response.setHeader('Cache-Control', 'public, max-age=86400')
  response.json({ data, error })
}
