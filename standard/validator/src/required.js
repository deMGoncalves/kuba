import outlet from './outlet'

function required (_target, _prop, descriptor) {
  const next = descriptor.value
  Object.assign(descriptor, {
    value (value) {
      return value
        ? (
            this[outlet]?.(),
            Reflect.apply(next, this, arguments)
          )
        : this[outlet]?.('required')
    }
  })
}

export default required
