import * as f from '@kuba/f'
import { setGlobal } from '@kuba/global'
import http from '@kuba/http'
import middleware from '@kuba/middleware'
import * as settings from '@kuba/settings'

const storage = () =>
  http
    .post(`${settings.api.url}/marca/shelf`)
    .then(response => response.json())
    .then(({ data: marcas, error }) => (
      f.not(error) && setGlobal({ marcas })
    ))

export default middleware(storage)
