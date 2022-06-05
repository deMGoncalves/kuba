import * as f from '@kuba/f'

export default function (Klass, ...args) {
  let target

  return new Proxy({}, {
    get (_, key) {
      target ??= new Klass(...args)

      return f.is(Function, target[key])
        ? target[key].bind(target)
        : target[key]
    }
  })
}
