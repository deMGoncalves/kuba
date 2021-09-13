import * as settings from '@kuba/settings'

export default () =>
  fetch(`${settings.api.host}/blocks/shelf`)
    .then(response => response.json())
