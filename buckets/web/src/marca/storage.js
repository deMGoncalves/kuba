import * as f from '@kuba/f'
import * as settings from '@kuba/settings'
import { params } from '@kuba/router'
import http from '@kuba/http'
import middleware from '@kuba/middleware'

const { onError, onResponse } = f.dunder

const storage = middleware((target) =>
  http
    .post(`${settings.api.url}/marca`)
    .body({ slug: params.marca })
    .then(response => response.json())
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
