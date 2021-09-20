import * as f from '@kuba/f'
import * as settings from '@kuba/settings'

export default (navigation) =>
  fetch(`${settings.api.url}/categories?display=[name,link_rewrite]&&filter[id_parent]=[${navigation.departament}]`)
    .then(response => response.json())
    .then(f.prop('categories'))
