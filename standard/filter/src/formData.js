function formData (_target, _prop, descriptor) {
  const next = descriptor.value
  Object.assign(descriptor, {
    value (e) {
      const data = Object.fromEntries([...new FormData(e.target)])
      return Reflect.apply(next, this, [data])
    }
  })
}

export default formData
