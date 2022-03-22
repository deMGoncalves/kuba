import * as f from '@kuba/f'
import { after } from '@kuba/middleware'
import { params } from '@kuba/router'
import global, { setGlobal } from '@kuba/global'
import http, { api } from '@kuba/http'

const next = after(function (output) {
  http
    .post(`${api.url}/shape/marca`, { slug: params.marca, page: this.page })
    .json(({ data: shapes, error }) => (
      f.not(error) && setGlobal({
        shapes: [...global.shapes, ...shapes]
      })
    ))

  return output
})

export {
  next
}
