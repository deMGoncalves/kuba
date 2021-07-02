import * as f from '@kuba/f'
import { urlFor } from '@kuba/router'
import headers from './headers'

export default () =>
  fetch(`${__settings.api.host}/auth/user`, { headers })
    .then(response => response.json())
    .then(f.prop('data.aud'))
    .then(f.different('authenticated'))
    .then(anonymous => (anonymous && location.assign(urlFor('signin'))))
