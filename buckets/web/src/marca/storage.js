import * as f from '@kuba/f'
import * as settings from '@kuba/settings'
import { params } from '@kuba/router'
import http from '@kuba/http'
import middleware from '@kuba/middleware'

const onError = f.dunder.onError
const onResponse = f.dunder.onResponse

const storage = middleware((target) =>
  http
    .post(`${settings.api.url}/marca`, { slug: params.marca })
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
