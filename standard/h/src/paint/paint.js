import * as f from '@kuba/f'
import execute from './execute'
import create from './create'

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
