import * as f from '@kuba/f'
import http from '@kuba/http'
import middleware from '@kuba/middleware'
import { args } from '@kuba/router'
import * as settings from '@kuba/settings'

const onError = f.dunder.onError
const onResponse = f.dunder.onResponse

const storage = middleware((target) =>
  http
    .post(`${settings.api.url}/shape/search`, { page: 1, q: args.q })
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
