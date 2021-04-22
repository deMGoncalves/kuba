import * as f from '@kuba/f'
import executeComponent from './executeComponent'
import createEntity from './createEntity'

export default (componentRef) =>
  (Entity) =>
    new Proxy(
      function (props, children) {
        return (this instanceof Entity)
          ? createEntity(componentRef, new Entity(...arguments))
          : executeComponent(componentRef, new Entity({ ...props }), children)
      },
      {
        get: (_, key) => Entity[key],
        set: (_, key, value) => f.T(Entity[key] = value)
      }
    )
