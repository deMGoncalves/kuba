import { dataLayer } from '@kuba/gtm'
import { before } from '@kuba/middleware'

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
