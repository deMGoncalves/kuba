import * as f from '@kuba/f'
import http from '@kuba/http'
import middleware from '@kuba/middleware'
import * as settings from '@kuba/settings'

const onError = f.dunder.onError
const onResponse = f.dunder.onResponse

const tamanho = JSON.parse(f.or(localStorage.getItem('_ml.tamanho'), '{}'))

const effect = middleware((target) => (
  http
    .post(`${settings.api.url}/shape/shelf`, {
      material: ['Maple Norte Americano'],
      tamanho: f
        .from(tamanho)
        .pipe(f.entries)
        .pipe(f.filter(f.__, f.compose(f.different(0), f.prop('[1]'))))
        .pipe(f.map(f.__, f.prop('[0]')))
        .done(),
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

f.assign(effect, {
  onError,
  onResponse
})

export default effect
