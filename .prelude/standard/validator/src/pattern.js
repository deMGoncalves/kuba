import outlet from './outlet'

function pattern (patternText) {
  return function (_target, _prop, descriptor) {
    const next = descriptor.value
    Object.assign(descriptor, {
      value (value) {
        return (new RegExp(patternText, 'i').test(value))
          ? (
              this[outlet]?.(),
              Reflect.apply(next, this, arguments)
            )
          : this[outlet]?.('pattern')
      }
    })
  }
}

export default pattern
