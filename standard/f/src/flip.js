import curry from './curry'
import reverse from './reverse'

const flip = (func) =>
  (...args) => func(...reverse(args))

export default curry(flip)
