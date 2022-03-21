import * as f from '@kuba/f'
import * as settings from '@kuba/settings'
import { after } from '@kuba/middleware'
import { params } from '@kuba/router'
import global, { setGlobal } from '@kuba/global'
import http from '@kuba/http'

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
