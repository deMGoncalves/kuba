import { params } from '@kuba/router'
import * as settings from '@kuba/settings'

export default () =>
  fetch(
    `${settings.api.url}/marca/slug`,
    {
      body: JSON.stringify({ slug: params.marca }),
      method: 'POST'
    }
  )
    .then(response => response.json())
