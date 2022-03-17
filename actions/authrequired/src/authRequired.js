import * as f from '@kuba/f'
import * as settings from '@kuba/settings'
import { redirectTo } from '@kuba/router'
import headers from './headers'
import http from '@kuba/http'
import middleware from '@kuba/middleware'

const authRequired = () =>
  http
    .post(`${settings.api.url}/auth/user`)
    .headers(headers)
    .then(response => response.json())
    .then(f.prop('data.aud'))
    .then(f.different('authenticated'))
    .then(anonymous => (anonymous && redirectTo('signin')))

export default middleware(authRequired)
