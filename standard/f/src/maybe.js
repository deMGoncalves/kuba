const maybe = new Proxy({}, {
  get: (_, key) =>
    (...args) => ({
      case: (chain) => (
        chain?.[key]?.(...args)
      )
    })
})

export default maybe
