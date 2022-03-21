import { before } from '@kuba/middleware'
import { dataLayer } from '@kuba/gtm'

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
