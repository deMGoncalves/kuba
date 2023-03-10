import magic from '@kuba/magic'
import paint from './paint'

function willMount (_target, _prop, descriptor) {
  const event = (this?.event ?? magic.willMount)
  const next = descriptor.value

  Object.assign(descriptor, {
    value () {
      this[paint.instance]?.()?.[event]?.()
      return Reflect.apply(next, this, arguments)
    },
    writable: true
  })
}

function hook (target, prop) {
  const event = (this?.event ?? magic.willMount)

  Reflect.defineProperty(target, event, {
    value () {
      return this[prop](), this
    },
    writable: true
  })
}

export default willMount
export {
  hook
}
