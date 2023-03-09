Reflect.defineProperty(Array.prototype, 'group', {
  value (functionRef, thisRef) {
    const evaluate = (reducer, object) => (
      (reducer[functionRef.call(thisRef, object)] ??= []).push(object),
      reducer
    )
    return this.reduce(evaluate, {})
  }
})
