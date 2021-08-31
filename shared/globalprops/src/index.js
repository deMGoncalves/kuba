import * as f from '@kuba/f'

export default (Entity) =>
  new Proxy(
    function (props) {
      const instance = (this instanceof Entity)
        ? new Entity(...arguments)
        : Entity(...arguments)

      return new Proxy(instance, {
        get: (target, key) =>
          (f.has(key, target) ? target : props)[key],

        set: (target, key, value) =>
          f.T(target[key] = value)
      })
    },
    {
      get: (_, key) => Entity[key],
      set: (_, key, value) => f.T(Entity[key] = value)
    }
  )
