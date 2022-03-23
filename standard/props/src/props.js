import * as f from '@kuba/f'

export default (Klass) =>
  new Proxy(
    function (props) {
      const target = (this instanceof Klass)
        ? new Klass(...arguments)
        : Klass(...arguments)

      const traps = {
        get (target, key) {
          const member = (key in target ? target : props)[key]

          return f.is(Function, member)
            ? member.bind(target)
            : member
        },

        set (target, key, value) {
          return f.T(target[key] = value)
        }
      }

      return new Proxy(target, traps)
    },
    {
      get: (_, key) => Klass[key],
      set: (_, key, value) => f.T(Klass[key] = value)
    }
  )
