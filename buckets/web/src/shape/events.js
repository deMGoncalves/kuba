import * as f from '@kuba/f'
import * as settings from '@kuba/settings'
import { after } from '@kuba/middleware'
import { params } from '@kuba/router'
import http from '@kuba/http'

const views = JSON.parse(f.or(sessionStorage.getItem('_kuba.views'), '{}'))

const onView = after(function (output) {
  f.isFalsy(views[params.shape]) && (
    http
      .post(`${settings.api.url}/shape/view`, { slug: params.shape })
      .then(response => response.json())
      .then(({ error }) => (
        f.isNil(error) && (
          f.assign(views, { [params.shape]: f.T() }),
          sessionStorage.setItem('_kuba.views', JSON.stringify(views))
        )
      ))
  )

  return output
})

export default {
  onView
}
