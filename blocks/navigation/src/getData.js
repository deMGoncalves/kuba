import * as settings from '@kuba/settings'

export default () =>
  fetch(`${settings.api.host}/blocks/navigation`)
    .then(response => response.json())
