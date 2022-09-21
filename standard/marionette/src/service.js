import * as f from '@kuba/f'
import middleware from '@kuba/middleware'

export default (callback) =>
  new Proxy(
    middleware((target) => (
      callback(new Proxy({}, {
        get: (_, key) => {
          const method = (target[f.magic(key)] ?? target[key])
          return f.is(Function, method)
            ? method.bind(target)
            : method
        }
      }))
    )),
    {
      get: (_, key) => f.dunder[key]
    }
  )
