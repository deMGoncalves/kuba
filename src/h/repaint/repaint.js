export default (target, _, descriptor) => {
  const method = descriptor.value

  Object.assign(descriptor, {
    value (...args) {
      const result = method.call(this, ...args)
      this.__reflow__ && this.__reflow__()
      return result
    }
  })

  return descriptor
}
