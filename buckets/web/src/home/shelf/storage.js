import * as f from '@kuba/f'
import http, { api } from '@kuba/http'
import middleware from '@kuba/middleware'

const { onError, onResponse, query } = f.dunder

const effect = middleware((target) => (
  http
    .post(`${api.url}/shape/shelf`)
    .body({
      ...target[query],
      size: 4,
      page: 1
    })
    .json(({ data, error }) => (
      error
        ? target[onError]()
        : target[onResponse](data)
    ))
))

f.assign(effect, {
  onError,
  onResponse,
  query
})

export default effect
