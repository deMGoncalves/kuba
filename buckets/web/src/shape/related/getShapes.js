import * as f from '@kuba/f'
import global from '@kuba/global'
import { params } from '@kuba/router'
import * as settings from '@kuba/settings'

export default () =>
  fetch(
    `${settings.api.url}/shape/related`,
    {
      body: JSON.stringify({
        material: f.map(global.material, f.prop('id')),
        slug: params.shape,
        tamanho: global.tamanho.id
      }),
      method: 'POST'
    }
  )
    .then(response => response.json())
