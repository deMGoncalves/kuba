/*
import supabase from '@kuba/supabase'

export default async function (request, response) {
  const { authorization } = request.headers
  const { password } = JSON.parse(request.body)
  const { data, error } = await supabase.auth.api.updateUser(authorization, { password })

  response.json({ data, error })
}
*/
