import * as f from '@kuba/f'
import * as settings from '@kuba/settings'
import { setGlobal } from '@kuba/global'
import http from '@kuba/http'
import middleware from '@kuba/middleware'

const storage = () =>
  http
    .post(`${settings.api.url}/marca/shelf`)
    .then(response => response.json())
    .then(({ data: marcas, error }) => (
      f.not(error) && setGlobal({ marcas })
    ))

export default middleware(storage)
