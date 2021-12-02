import { dataLayer } from '@kuba/gtm'
import { after } from '@kuba/middleware'
import schema from './schema.json'

const copy = after(function (output) {
  dataLayer.push({
    event: 'hero',
    hero_copy: `${schema.command} ${schema.package}`
  })
  return output
})

export default {
  copy
}
