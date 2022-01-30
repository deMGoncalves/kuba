import * as settings from '@kuba/settings'

export default (q) =>
  fetch(`${settings.api.url}/shape/search`,
    {
      body: JSON.stringify({ q }),
      method: 'POST'
    }
  )
    .then(response => response.json())
