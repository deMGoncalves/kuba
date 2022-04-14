import { createClient } from '@supabase/supabase-js'
import options from './options'

export default function (context) {
  const { API_URL, API_KEY } = context.env
  const client = createClient(API_URL, API_KEY, options)

  return client
}
