import * as f from '@kuba/f'
import global, { setGlobal } from '@kuba/global'
import http from '@kuba/http'
import { after } from '@kuba/middleware'
import { params } from '@kuba/router'
import * as settings from '@kuba/settings'

const next = after(function (output) {
  http
    .post(`${settings.api.url}/shape/marca`, { slug: params.marca, page: this.page })
    .then(response => response.json())
    .then(({ data: shapes, error }) => (
      f.not(error) && setGlobal({
        shapes: [...global.shapes, ...shapes]
      })
    ))

  return output
})

export {
  next
}
