import * as settings from '@kuba/settings'

export default () =>
  fetch(`${settings.api.host}/blocks/inspiration`)
    .then(response => response.json())
