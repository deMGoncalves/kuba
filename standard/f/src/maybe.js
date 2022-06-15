const maybe = new Proxy({}, {
  get: (_, target) =>
    (...args) => ({
      case: (chain) => (
        chain?.[target]?.(...args)
      )
    })
})

export default maybe
