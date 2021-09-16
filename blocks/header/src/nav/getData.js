import * as settings from '@kuba/settings'

export default () =>
  fetch(`${settings.api.url}/categories?display=[name,link_rewrite]&filter[level_depth]=[2]`)
    .then(response => response.json())
