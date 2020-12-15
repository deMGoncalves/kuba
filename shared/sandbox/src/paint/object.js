import * as f from '@rex/f'
import functor from './functor'

export default (instance, component) =>
  new Proxy(
    (_, children) => functor(instance, component, children),
    {
      get: (_, key) => f.is(Function, instance[key]) ? instance[key].bind(instance) : instance[key],
      set: (_, key, value) => f.T(instance[key] = value)
    }
  )
