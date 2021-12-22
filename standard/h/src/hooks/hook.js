import * as f from '@kuba/f'

export default (hook) =>
  (klass, method, descriptor) => (
    Object.defineProperty(klass, f.dunder[hook], {
      value: function () {
        return this[method]()
      }
    }),
    descriptor
  )
