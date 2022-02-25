import supabase from '@kuba/supabase'

export default async function (request, response) {
  const { slug } = JSON.parse(request.body)
  const { data } = await supabase
    .from('marca')
    .select('views')
    .eq('slug', slug)
    .single()

  const { error } = await supabase
    .from('marca')
    .update({ views: data.views + 1 })
    .eq('slug', slug)

  response.json({ error })
}
