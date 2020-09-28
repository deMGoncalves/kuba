import * as f from '@rex/f'
import onComponent from './onComponent'

export default (context, component) =>
  new Proxy(
    (_, children) => onComponent(context, component, children),
    {
      get (_, key) {
        const target = context[key]
        return f.is(Function, target) ? target.bind(context) : target
      },

      set: (_, key, value) => f.T(context[key] = value)
    }
  )
