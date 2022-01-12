/*
import supabase from '@kuba/supabase'

export default async function (request, response) {
  const { email, name, password } = JSON.parse(request.body)
  const { data, error } = await supabase.auth.signUp({ email, password })

  await supabase.auth.api.updateUser(data.access_token, { data: { name } })

  response.json({ data, error })
}
*/
