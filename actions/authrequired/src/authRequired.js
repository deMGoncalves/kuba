import * as f from '@kuba/f'
import { redirectTo } from '@kuba/router'
import headers from './headers'
import http, { api } from '@kuba/http'
import middleware from '@kuba/middleware'

const authRequired = () =>
  http
    .post(`${api.url}/auth/user`)
    .headers(headers)
    .json()
    .then(f.prop('data.aud'))
    .then(f.different('authenticated'))
    .then(anonymous => (anonymous && redirectTo('signin')))

export default middleware(authRequired)
