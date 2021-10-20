import * as f from '@kuba/f'
import middleware from '@kuba/middleware'
import { urlFor } from '@kuba/router'
import * as settings from '@kuba/settings'
import headers from './headers'

const authRequired = () =>
  fetch(`${settings.api.url}/auth/user`, { headers })
    .then(response => response.json())
    .then(f.prop('data.aud'))
    .then(f.different('authenticated'))
    .then(anonymous => (anonymous && location.assign(urlFor('signin'))))

export default middleware(authRequired)
