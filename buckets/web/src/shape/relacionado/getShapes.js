import * as f from '@kuba/f'
import global from '@kuba/global'
import * as settings from '@kuba/settings'

export default () =>
  fetch(
    `${settings.api.url}/shape/related`,
    {
      body: JSON.stringify({
        material: f.map(global.shape.material, f.prop('id')),
        tamanho: global.shape.tamanho.id
      }),
      method: 'POST'
    }
  )
    .then(response => response.json())
