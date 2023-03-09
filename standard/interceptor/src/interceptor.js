function interceptor (functionRef) {
  return (_target, _prop, descriptor) => {
    const next = descriptor.value
    Object.assign(descriptor, {
      value () {
        return Reflect.apply(functionRef, this, [arguments, next.bind(this)])
      }
    })
  }
}

export default interceptor
