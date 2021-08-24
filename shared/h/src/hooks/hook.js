import * as f from '@kuba/f'

export default (hook) =>
  (entity, method, descriptor) => (
    Object.defineProperty(entity, f.magic(hook), {
      value: function () {
        return this[method]()
      }
    }),
    descriptor
  )
