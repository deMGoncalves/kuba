const maybe = new Proxy({}, {
  get: (_, target) =>
    function (...args) {
      return {
        case (chain) {
          chain?.[target]?.(...args)
          return this
        }
      }
    }
})

export default maybe
