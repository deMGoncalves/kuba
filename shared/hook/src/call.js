import * as f from '@kuba/f'

export default (advice) =>
  (Klass) =>
    new Proxy(
      function () {
        const instance = (this instanceof Klass)
          ? new Klass(...arguments)
          : Klass(...arguments)

        return f.always(instance)(advice(instance))
      },
      {
        get: (_, key) => Klass[key],
        set: (_, key, value) => f.T(Klass[key] = value)
      }
    )
