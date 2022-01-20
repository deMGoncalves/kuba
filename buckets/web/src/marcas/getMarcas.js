import * as settings from '@kuba/settings'

export default () =>
  fetch(`${settings.api.url}/marca/shelf`)
    .then(response => response.json())
