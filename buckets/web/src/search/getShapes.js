import * as settings from '@kuba/settings'

export default (page) =>
  fetch(`${settings.api.url}/shape/shelf`,
    {
      body: JSON.stringify({ page }),
      method: 'POST'
    }
  )
    .then(response => response.json())
