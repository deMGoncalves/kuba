import * as f from '@rex/f'
import onComponent from './onComponent'

export default (instance, component) =>
  new Proxy(
    function (_, children) {
      return onComponent(instance, component, children)
    },
    {
      get (_, key) {
        const property = f.prop(key, instance)
        return f.is(Function, property) ? property.bind(instance) : property
      },
      set: (_, key, value) => f.T(instance[key] = value)
    }
  )
