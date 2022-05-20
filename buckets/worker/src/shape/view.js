import * as f from '@kuba/f'
import supabase from '@kuba/supabase'

export default async function (request) {
  const { slug } = request.params
  const { data } = await supabase
    .from('shape')
    .select('views')
    .eq('slug', slug)
    .single()

  const { error } = await supabase
    .from('shape')
    .update({ views: f.inc(data.views) })
    .eq('slug', slug)

  return new Response(JSON.stringify({ error }))
}
