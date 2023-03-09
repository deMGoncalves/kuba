export default (ClassRef) =>
  new Proxy(
    function (...args) {
      let instance
      return new Proxy(
        {
          get instance () {
            return (instance ??= new ClassRef(...args))
          }
        },
        {
          get (target, key) {
            const prop = Reflect.get(target.instance, key)
            return prop?.bind?.(target.instance) ?? prop
          },

          set (target, key, value) {
            Reflect.set(target.instance, key, value)
            return true
          }
        }
      )
    },
    {
      get: (_, key) => Reflect.get(ClassRef, key),
      set: (_, key, value) => (Reflect.set(ClassRef, key, value), true)
    }
  )
