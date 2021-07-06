import supabase from '@kuba/supabase'

export default async function (_request, response) {
  const { data, error } = await supabase
    .from('feed')
    .select('description, image (data, extension)')

  response.json({ data, error })
}
