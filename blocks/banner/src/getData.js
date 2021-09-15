import * as settings from '@kuba/settings'

export default () =>
  fetch(`${settings.api.url}/blocks/banner`)
    .then(response => response.json())
