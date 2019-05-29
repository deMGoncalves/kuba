import proxyOverComponent from './proxyOverComponent'
import proxyOverObject from './proxyOverObject'

export default (Component) =>
  (Target) =>
    function Stub (attrs, children) {
      return (this instanceof Stub)
        ? proxyOverObject(new Target(...arguments), Component)
        : proxyOverComponent(new Target({ ...attrs }), Component, children)
    }
