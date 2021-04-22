import curry from './curry'
import reverse from './reverse'

const flip = (target) =>
  (...args) => target(...reverse(args))

export default curry(flip)
