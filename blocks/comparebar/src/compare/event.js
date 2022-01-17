import { dataLayer } from '@kuba/gtm'
import { after } from '@kuba/middleware'

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
