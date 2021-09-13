import * as settings from '@kuba/settings'

export default () =>
  fetch(`${settings.api.host}/blocks/hero`)
    .then(response => response.json())
