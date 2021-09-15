import * as settings from '@kuba/settings'

export default () =>
  fetch(`${settings.api.url}/products?display=full`)
    .then(response => response.json())
