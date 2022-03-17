import * as f from '@kuba/f'

const params = {}

export default new Proxy(
  f.assign(params),
  {
    get: (_, key) => params[key]
  }
)
