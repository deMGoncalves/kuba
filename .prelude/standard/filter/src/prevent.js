function prevent (_target, _prop, descriptor) {
  const next = descriptor.value
  Object.assign(descriptor, {
    value (e) {
      e.preventDefault()
      return Reflect.apply(next, this, arguments)
    }
  })
}

export default prevent
