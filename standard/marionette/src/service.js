import * as f from '@kuba/f'
import middleware from '@kuba/middleware'

export default (callback) =>
  new Proxy(
    middleware((target) => (
      callback(new Proxy({}, {
        get: (_, key) => (
          f.has(f.dunder[key], target)
            ? f.dunder(key, target)
            : f.is(Function, target[key])
              ? target[key].bind(target)
              : target[key]
        )
      }))
    )),
    {
      get: (_, key) => f.dunder[key]
    }
  )
