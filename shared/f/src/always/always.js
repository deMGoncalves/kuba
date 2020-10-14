import curry from '@rex/f/src/curry'
import isEmpty from '@rex/f/src/isEmpty'
import magic from '@rex/f/src/magic'
import or from '@rex/f/src/or'

const always = (x) =>
  () => isEmpty(x)
    ? x
    : or(x[magic('f/always')], x)

export default curry(always)
