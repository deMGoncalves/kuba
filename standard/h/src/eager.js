import * as f from '@kuba/f'

export default function (Klass, ...args) {
  let target

  return new Proxy({}, {
    get (_, method) {
      target ??= new Klass(...args)

      return f.is(Function, target[method])
        ? target[method].bind(target)
        : target[method]
    }
  })
}
