import curry from '@rex/f/src/curry'
import reverse from '@rex/f/src/reverse'

const flip = (target) =>
  (...args) => target(...reverse(args))

export default curry(flip)
