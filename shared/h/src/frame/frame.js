import * as f from '@rex/f'

const frame = (target, ...args) =>
  window.requestAnimationFrame(() => target(...args))

export default f.curry(f.arity(2, frame))
