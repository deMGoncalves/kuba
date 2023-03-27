import interceptor from '@kuba/interceptor'
import magic from '@kuba/magic'

const focus = interceptor(function (args, next) {
  setImmediate(() => this[focus.element]().focus())
  return next(...args)
})

Object.assign(focus, {
  element: magic.focus_element
})

export default focus
