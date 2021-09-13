import * as settings from '@kuba/settings'

export default () =>
  fetch(`${settings.api.host}/blocks/banner`)
    .then(response => response.json())
