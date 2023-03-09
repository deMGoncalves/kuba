import magic from '@kuba/magic'

function value (_target, _prop, descriptor) {
  const next = descriptor.value
  Object.assign(descriptor, {
    value (e) {
      const unmaskedValue = e.target?.[magic.imask]?.unmaskedValue
      const value = e.target.value
      return Reflect.apply(next, this, [unmaskedValue ?? value])
    }
  })
}

export default value
