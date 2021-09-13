import * as f from '@kuba/f'
import { urlFor } from '@kuba/router'
import * as settings from '@kuba/settings'
import headers from './headers'

export default () =>
  fetch(`${settings.api.host}/auth/user`, { headers })
    .then(response => response.json())
    .then(f.prop('data.aud'))
    .then(f.different('authenticated'))
    .then(anonymous => (anonymous && location.assign(urlFor('signin'))))
