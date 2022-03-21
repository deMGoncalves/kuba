import { before } from '@kuba/middleware'
import { dataLayer } from '@kuba/gtm'

const redirect = before(function (page) {
  dataLayer.push({
    event: 'header',
    header_logo: page
  })
  return [page]
})

export default {
  redirect
}
