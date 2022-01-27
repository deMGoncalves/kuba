import * as f from '@kuba/f'
import global from '@kuba/global'
import * as settings from '@kuba/settings'

export default () =>
  fetch(
    `${settings.api.url}/shape/related`,
    {
      body: JSON.stringify({
        material: f
          .from(global.shape.material)
          .pipe(f.or(f.__, []))
          .pipe(f.map(f.__, f.prop('id')))
          .done(),
        tamanho: global.shape.tamanho.id
      }),
      method: 'POST'
    }
  )
    .then(response => response.json())
