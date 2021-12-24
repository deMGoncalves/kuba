import { createClient } from '@supabase/supabase-js'
import { supabase } from '@kuba/settings'
import options from './options'

export default createClient(supabase.apiURL, supabase.apiKey, options)
