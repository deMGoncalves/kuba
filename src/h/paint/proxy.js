import { is, prop } from '../../share'
import hook from './hook'

export default (target, Component) =>
  new Proxy(
    (_, children) =>
      hook(target, Component, children),
    {
      get (_, property) {
        const propertyOrMethod = prop(property, target)

        return is(Function, propertyOrMethod)
          ? propertyOrMethod.bind(target)
          : propertyOrMethod
      }
    }
  )
