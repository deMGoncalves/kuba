function props (ClassRef) {
  return new Proxy(
    function () {
      const instance = (this instanceof ClassRef)
        ? new ClassRef(...arguments)
        : ClassRef(...arguments)

      const traps = {
        get (target, key) {
          const prop = Reflect.get(target, key)
          return prop?.bind?.(target) ?? prop
        },

        set (target, key, value) {
          Reflect.set(target, key, value)
          return true
        }
      }

      return new Proxy(instance, traps)
    },
    {
      get: (_, key) => Reflect.get(ClassRef, key),
      set: (_, key, value) => (Reflect.set(ClassRef, key, value), true)
    }
  )
}

export default props
