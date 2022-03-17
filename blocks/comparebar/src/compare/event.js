import { after } from '@kuba/middleware'
import { dataLayer } from '@kuba/gtm'

const open = after(function (output) {
  dataLayer.push({
    event: 'header',
    header_compare: 'open'
  })
  return output
})

export default {
  open
}
