import * as f from '@kuba/f'
import { params } from '@kuba/router'
import http, { api } from '@kuba/http'
import middleware from '@kuba/middleware'

const { onError, onResponse } = f.dunder

const storage = middleware((target) =>
  http
    .post(`${api.url}/shape`)
    .body({ slug: params.shape })
    .json(({ data, error }) => (
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
