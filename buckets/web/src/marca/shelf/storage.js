import * as f from '@kuba/f'
import http from '@kuba/http'
import middleware from '@kuba/middleware'
import { params } from '@kuba/router'
import * as settings from '@kuba/settings'

const onChange = f.dunder.onChange

const storage = middleware((target) =>
  http
    .post(`${settings.api.url}/shape/marca`, { slug: params.marca })
    .then(response => response.json())
    .then(({ data, error }) => (
      f.not(error) && target[onChange](data)
    ))
)

f.assign(storage, {
  onChange
})

export default storage
