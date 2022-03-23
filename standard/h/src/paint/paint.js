import * as f from '@kuba/f'
import create from './create'
import execute from './execute'

export default (component) =>
  (Klass) =>
    new Proxy(
      function (props, children) {
        return (this instanceof Klass)
          ? create(component, new Klass(...arguments), children)
          : execute(component, new Klass({ ...props }), children)
      },
      {
        get: (_, key) => Klass[key],
        set: (_, key, value) => f.T(Klass[key] = value)
      }
    )
