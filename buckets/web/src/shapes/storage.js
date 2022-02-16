import * as f from '@kuba/f'
import http from '@kuba/http'
import middleware, { after } from '@kuba/middleware'
import * as settings from '@kuba/settings'

const onError = f.dunder.onError
const onResponse = f.dunder.onResponse
const storage = middleware(request)
const pull = after(request)

function request (target) {
  http
    .post(`${settings.api.url}/shape/shelf`, { page: target.page })
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
