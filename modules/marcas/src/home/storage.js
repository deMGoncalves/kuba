import * as f from '@kuba/f'
import { setGlobal } from '@kuba/global'
import http, { api } from '@kuba/http'
import middleware from '@kuba/middleware'

const storage = () =>
  http
    .post(`${api.url}/marca/shelf`)
    .json()
    .then(({ data: marcas, error }) => (
      f.not(error) && setGlobal({ marcas })
    ))

export default middleware(storage)
