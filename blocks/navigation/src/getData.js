import * as settings from '@kuba/settings'

export default () =>
  fetch(`${settings.api.url}/blocks/navigation`)
    .then(response => response.json())
