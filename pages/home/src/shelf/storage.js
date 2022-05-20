import * as f from '@kuba/f'
import http, { api } from '@kuba/http'
import middleware from '@kuba/middleware'

const { didMount, onError, onResponse, query } = f.dunder

const storage = middleware((target) => (
  target[didMount] = () =>
    http
      .post(`${api.worker}/shape/shelf`)
      .body({
        ...target[query](),
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

f.assign(storage, {
  onError,
  onResponse,
  query
})

export default storage
