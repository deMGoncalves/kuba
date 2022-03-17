import * as f from '@kuba/f'
import * as settings from '@kuba/settings'
import global, { useEffect } from '@kuba/global'
import http from '@kuba/http'
import middleware from '@kuba/middleware'

const { onError, onResponse } = f.dunder

const effect = middleware((target) => (
  useEffect(() => (
    http
      .post(`${settings.api.url}/shape/shelf`, {
        material: f
          .from(global.shape.material)
          .pipe(f.or(f.__, []))
          .pipe(f.map(f.__, f.prop('valor')))
          .done(),
        tamanho: [global.shape.tamanho.valor],
        size: 4,
        page: 1
      })
      .then(response => response.json())
      .then(({ data, error }) => (
        error
          ? target[onError]()
          : target[onResponse](data)
      ))
  ))
))

f.assign(effect, {
  onError,
  onResponse
})

export default effect
