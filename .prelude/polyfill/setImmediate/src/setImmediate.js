Reflect.defineProperty(window, 'setImmediate', {
  value (functionRef) {
    return setTimeout(functionRef, 0)
  }
})
