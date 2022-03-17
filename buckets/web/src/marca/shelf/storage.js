import * as f from '@kuba/f'
import * as settings from '@kuba/settings'
import { setGlobal } from '@kuba/global'
import { params } from '@kuba/router'
import http from '@kuba/http'
import middleware from '@kuba/middleware'

const storage = () =>
  http
    .post(`${settings.api.url}/shape/marca`)
    .body({ slug: params.marca, page: 1 })
    .then(response => response.json())
    .then(({ data: shapes, error }) => (
      f.not(error) && setGlobal({ shapes })
    ))

export default middleware(storage)
