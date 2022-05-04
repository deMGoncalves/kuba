import * as f from '@kuba/f'
import global, { useEffect } from '@kuba/global'
import http, { api } from '@kuba/http'
import middleware from '@kuba/middleware'

const { onError, onResponse } = f.dunder

const storage = middleware((target) => (
  useEffect(() => (
    http
      .post(`${api.url}/shape/shelf`)
      .body({
        material: f
          .from(global.shape.material)
          .pipe(f.or(f.__, []))
          .pipe(f.map(f.__, f.prop('valor')))
          .done(),
        tamanho: [global.shape.tamanho.valor],
        size: 4,
        page: 1
      })
      .json()
      .then(({ data, error }) => (
        error
          ? target[onError]()
          : target[onResponse](data)
      ))
  ))
))

f.assign(storage, {
  onError,
  onResponse
})

export default storage
