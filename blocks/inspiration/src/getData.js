import * as settings from '@kuba/settings'

export default () =>
  fetch(`${settings.api.url}/blocks/inspiration`)
    .then(response => response.json())
