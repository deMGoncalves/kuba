import * as f from '@kuba/f'
import http, { api } from '@kuba/http'
import middleware, { after } from '@kuba/middleware'

const { onError, onResponse } = f.dunder

const storage = middleware(request)
const pull = after(request)

function request (target) {
  http
    .post(`${api.url}/shape/shelf`)
    .body({ page: target.page, ...target.filter })
    .josn(({ data, error }) => (
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
