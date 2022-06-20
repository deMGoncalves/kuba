import { after } from '@kuba/middleware'
import { dataLayer } from '@kuba/gtm'

const open = after((output) => (
  dataLayer.push({
    event: 'header',
    header_compare: 'open'
  }),
  output
))

export default {
  open
}
