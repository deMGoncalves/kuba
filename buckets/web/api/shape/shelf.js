import supabase from '@kuba/supabase'

export default async function (_request, response) {
  const { data, error } = await supabase
    .from('shape')
    .select('*')

  response.json({ data, error })
}
