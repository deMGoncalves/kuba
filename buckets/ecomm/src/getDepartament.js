import * as f from '@kuba/f'
import * as settings from '@kuba/settings'

export default (params) =>
  fetch(`${settings.api.url}/categories?display=[id,name,description]&filter[link_rewrite]=[${params.departament}]`)
    .then(response => response.json())
    .then(f.prop('categories[0]'))
