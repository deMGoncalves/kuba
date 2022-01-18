import { dataLayer } from '@kuba/gtm'
import { before } from '@kuba/middleware'

const redirect = before(function (page) {
  dataLayer.push({
    event: 'footer',
    footer_logo: page
  })
  return [page]
})

export default {
  redirect
}
