import * as f from '@kuba/f'
import { after } from '@kuba/middleware'
import { params } from '@kuba/router'
import http, { api } from '@kuba/http'

const views = JSON.parse(f.or(sessionStorage.getItem('_kuba.views'), '{}'))

const onView = after(function (output) {
  f.isFalsy(views[params.marca]) && (
    http
      .get(`${api.worker}/marca/${params.marca}/view`)
      .json(({ error }) => (
        f.isNil(error) && (
          f.assign(views, { [params.marca]: f.T() }),
          sessionStorage.setItem('_kuba.views', JSON.stringify(views))
        )
      ))
  )

  return output
})

export default {
  onView
}
