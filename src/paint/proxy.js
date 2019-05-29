import is from 'ramda/src/is'
import prop from 'ramda/src/prop'
import hook from './hook'

export default (target, Component) => {
  return new Proxy(
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
}
