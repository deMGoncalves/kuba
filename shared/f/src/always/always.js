import curry from '@rex/f/src/curry'
import magic from '@rex/f/src/magic'
import or from '@rex/f/src/or'

const always = (value) =>
  () => or(value[magic('f/always')], value)

export default curry(always)
