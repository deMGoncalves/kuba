import { createClient } from '@supabase/supabase-js'
import options from './options'

export default createClient(
  process.env.API_URL,
  process.env.API_KEY,
  options
)
