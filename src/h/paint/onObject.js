import is from 'ramda/src/is'
import prop from 'ramda/src/prop'
import proxyOverComponent from './onComponent'

export default (target, Component) => {
  return new Proxy(
    (_, children) =>
      proxyOverComponent(target, Component, children),
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
