import { dataLayer } from '@kuba/gtm'
import { after, before } from '@kuba/middleware'

const redirect = before(function (page) {
  dataLayer.push({
    event: 'header',
    header_nav: page
  })
  return [page]
})

const toggle = after(function (output) {
  dataLayer.push({
    event: 'header',
    header_menu: this.opened ? 'open' : 'close'
  })
  return output
})

export default {
  redirect,
  toggle
}
