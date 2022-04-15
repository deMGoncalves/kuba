import * as f from '@kuba/f'
import schema from './schema.json'

function lintrk (a, b) {
  lintrk.q.push([a, b])
}

f.assign(lintrk, {
  q: []
})

window._linkedin_partner_id = schema.id
window._linkedin_data_partner_ids ??= []
window._linkedin_data_partner_ids.push(window._linkedin_partner_id)

window.lintrk ??= lintrk

export default lintrk
