import * as settings from '@kuba/settings'

export default () =>
  fetch(`${settings.api.url}/blocks/exploration`)
    .then(response => response.json())
