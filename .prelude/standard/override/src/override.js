function override (target, prop, functionRef) {
  const next = target[prop] ?? function () { return undefined }
  Reflect.defineProperty(target, prop, {
    value () {
      return Reflect.apply(functionRef, this, [arguments, next.bind(this)])
    },
    writable: true
  })
}

export default override
