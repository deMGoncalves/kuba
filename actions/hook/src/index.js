import * as f from '@kuba/f'

export default (handler) =>
  function (entity, method, descriptor) {
    const hook = f.magic(f.random())

    handler(function (...args) {
      return entity[hook](...args)
    })

    Object.defineProperty(entity, hook, {
      value: function () {
        return this[method](...arguments)
      }
    })

    return descriptor
  }
