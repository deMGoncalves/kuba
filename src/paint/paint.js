import hook from './hook'
import proxy from './proxy'

export default (Component) =>
  (Target) =>
    function Stub (attrs, children) {
      return (this instanceof Stub)
        ? proxy(new Target(...arguments), Component)
        : hook(new Target({ ...attrs }), Component, children)
    }
