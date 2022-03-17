import * as f from '@kuba/f'
import * as settings from '@kuba/settings'
import http from '@kuba/http'
import middleware, { after } from '@kuba/middleware'

const { onError, onResponse } = f.dunder

const storage = middleware(request)
const pull = after(request)

function request (target) {
  http
    .post(`${settings.api.url}/shape/shelf`)
    .body({ page: target.page, ...target.filter })
    .then(response => response.json())
    .then(({ data, error }) => (
      error
        ? target[onError]()
        : target[onResponse](data)
    ))

  return target
}

f.assign(storage, {
  onError,
  onResponse,
  pull
})

export default storage
