import { before } from '@kuba/middleware'
import { dataLayer } from '@kuba/gtm'

const redirect = before(function () {
  dataLayer.push({
    event: 'breadcrumb',
    breadcrumb_path: this.page
  })

  return []
})

export default {
  redirect
}
