import * as f from '@kuba/f'
import http, { api } from '@kuba/http'
import middleware, { after } from '@kuba/middleware'
import range from './range'

const { filter, onError, onResponse } = f.dunder

const storage = middleware(request)
const pull = after(f.debounce(request, 0))

function request (target) {
  http
    .post(`${api.worker}/shelf`)
    .body({
      ...target[filter](),
      ...range(target)
    })
    .json()
    .then(({ data, error }) => (
      error
        ? target[onError]()
        : target[onResponse](data)
    ))

  return target
}

f.assign(storage, {
  filter,
  onError,
  onResponse,
  pull
})

export default storage
