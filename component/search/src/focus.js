import { paint } from '@kuba/h'
import interceptor from '@kuba/interceptor'

const focus = interceptor(function (args, next) {
  setImmediate(() => {
    const [container] = this[paint.rootAST]().children
    const input = container.__node__.querySelector('.search__input')
    input.focus()
  })
  return next(...args)
})

export default focus
