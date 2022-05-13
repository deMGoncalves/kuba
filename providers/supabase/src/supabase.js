import { createClient } from '@supabase/supabase-js'
import options from './options'

export default createClient(API_URL, API_KEY, options)
