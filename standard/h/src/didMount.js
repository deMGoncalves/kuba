import magic from '@kuba/magic'
import paint from './paint'

function didMount (_target, _prop, descriptor) {
  const event = (this?.event ?? magic.didMount)
  const next = descriptor.value

  Object.assign(descriptor, {
    value () {
      setImmediate(() => this[paint.instance]?.()?.[event]?.())
      return Reflect.apply(next, this, arguments)
    },
    writable: true
  })
}

function hook (target, prop) {
  const event = (this?.event ?? magic.didMount)

  Reflect.defineProperty(target, event, {
    value () {
      return this[prop](), this
    },
    writable: true
  })
}

export default didMount
export {
  hook
}
