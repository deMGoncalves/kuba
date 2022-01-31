import * as f from '@kuba/f'
import { setGlobal } from '@kuba/global'
import http from '@kuba/http'
import middleware from '@kuba/middleware'
import * as settings from '@kuba/settings'

const storage = () =>
  http
    .post(`${settings.api.url}/shape/shelf`, { page: 1 })
    .then(response => response.json())
    .then(({ data: shapes, error }) => (
      f.not(error) && setGlobal({ shapes })
    ))

export default middleware(storage)
