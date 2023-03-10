export default (...args) =>
  (target, method) => (
    args.forEach((prop) => (
      Reflect.defineProperty(target, prop, {
        value () {
          return this[method](...arguments)
        },
        writable: true
      })
    ))
  )
