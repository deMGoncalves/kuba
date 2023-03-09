!('requestAnimationFrame' in window) && (
  Reflect.defineProperty(window, 'requestAnimationFrame', {
    value (functionRef) {
      setTimeout(functionRef, 0)
    }
  })
)
