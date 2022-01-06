import * as f from '@kuba/f'
import supabase from '@kuba/supabase'

export default async function (request, response) {
  const { slug } = JSON.parse(request.body)
  const { data = [], error } = await supabase
    .from('marca')
    .select(`
      *,
      origem (*)
    `)
    .eq('slug', slug)

  response.json({ data: f.pop(data), error })
}
