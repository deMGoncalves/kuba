import * as settings from '@kuba/settings'

export default () =>
  fetch(`${settings.api.url}/shape/shelf`)
    .then(response => response.json())
