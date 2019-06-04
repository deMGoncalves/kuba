export default (target, _, descriptor) => {
  const originalMethod = descriptor.value

  Object.assign(descriptor, {
    value (...args) {
      const result = originalMethod.call(this, ...args)
      this.__reflow__ && this.__reflow__()
      return result
    }
  })

  return descriptor
}
