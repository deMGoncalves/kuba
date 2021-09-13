import * as settings from '@kuba/settings'

export default () =>
  fetch(`${settings.api.host}/blocks/exploration`)
    .then(response => response.json())
