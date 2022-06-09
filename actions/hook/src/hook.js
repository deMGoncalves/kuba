import * as f from '@kuba/f'

export default (handler) =>
  (target, method, descriptor) => {
    const spy = f.magic(f.random())

    handler(function (...args) {
      return target[spy](...args)
    })

    Object.defineProperty(target, spy, {
      value: function () {
        return Reflect.apply(this[method], this, arguments)
      }
    })

    return descriptor
  }
