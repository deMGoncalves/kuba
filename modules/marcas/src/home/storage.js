import * as f from '@kuba/f'
import http, { api } from '@kuba/http'
import middleware from '@kuba/middleware'
import range from './range'

const { onError, onResponse } = f.dunder

const storage = middleware((target) =>
  http
    .post(`${api.worker}/shelf/marca`)
    .body({
      ...range
    })
    .json()
    .then(({ data, error }) => (
      error
        ? target[onError]()
        : target[onResponse](data)
    ))
)

f.assign(storage, {
  onError,
  onResponse
})

export default storage
