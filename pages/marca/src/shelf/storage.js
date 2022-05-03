import * as f from '@kuba/f'
import { params } from '@kuba/router'
import { setGlobal } from '@kuba/global'
import http, { api } from '@kuba/http'
import middleware from '@kuba/middleware'

const storage = () =>
  http
    .post(`${api.url}/shape/marca`)
    .body({ slug: params.marca, page: 1 })
    .json(({ data: shapes, error }) => (
      f.not(error) && setGlobal({ shapes })
    ))

export default middleware(storage)
