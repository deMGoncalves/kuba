import { createClient } from '@supabase/supabase-js'

export default createClient(
  Cypress.env('API_URL'),
  Cypress.env('API_KEY')
)
