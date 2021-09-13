import * as settings from '@kuba/settings'

export default () =>
  fetch(`${settings.api.host}/blocks/workflow`)
    .then(response => response.json())
