import * as f from '@rex/f'
import onComponent from './onComponent'

export default (klass, component) =>
  new Proxy(
    function (_, children) {
      return onComponent(klass, component, children)
    },
    {
      get (_, key) {
        const property = f.prop(key, klass)
        return f.is(Function, property) ? property.bind(klass) : property
      },
      set: (_, key, value) => f.T(klass[key] = value)
    }
  )
