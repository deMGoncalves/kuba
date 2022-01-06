import supabase from '@kuba/supabase'

const { readFileSync } = require('fs')
const { join } = require('path')

const file = readFileSync(join(__dirname, '..', 'public', 'index.html'), 'utf8')

export default async function (_request, response) {
  const { data, error } = await supabase
    .from('shape')
    .select(`
      *,
      tipo (*),
      marca (*, origem (*)),
      tamanho (*),
      material (*),
      wheelbase (*),
      montagem (*),
      flag (*)
    `)

  response.json(data)
}
