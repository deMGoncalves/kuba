import { params } from '@kuba/router'
import * as settings from '@kuba/settings'

export default () =>
  fetch(
    `${settings.api.url}/shape/slug`,
    {
      body: JSON.stringify({ slug: params.shape }),
      method: 'POST'
    }
  )
    .then(response => response.json())
