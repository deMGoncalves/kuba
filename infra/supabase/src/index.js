import { createClient } from '@supabase/supabase-js'
import key from './key'
import options from './options'
import url from './url'

export default createClient(url, key, options)
