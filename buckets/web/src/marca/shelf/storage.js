import * as f from '@kuba/f'
import middleware from '@kuba/middleware'
import { params } from '@kuba/router'
import * as settings from '@kuba/settings'

const onChange = f.dunder.onChange

const storage = middleware((target) =>
  fetch(
    `${settings.api.url}/shape/marca`,
    {
      body: JSON.stringify({ slug: params.marca }),
      method: 'POST'
    }
  )
    .then(response => response.json())
    .then(({ data, error }) => (
      f.not(error) && target[onChange](data)
    ))
)

f.assign(storage, {
  onChange
})

export default storage
