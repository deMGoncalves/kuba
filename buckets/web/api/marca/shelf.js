import supabase from '@kuba/supabase'

export default async function (_request, response) {
  const { data, error } = await supabase
    .from('marca')
    .select(`
      *
    `)

  response.json({ data, error })
}
