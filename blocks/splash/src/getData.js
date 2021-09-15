import * as settings from '@kuba/settings'

export default () =>
  fetch(`${settings.api.url}/blocks/hero`)
    .then(response => response.json())
