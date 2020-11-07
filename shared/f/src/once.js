import always from '@rex/f/src/always'
import curry from '@rex/f/src/curry'

const once = (target) =>
  (...args) =>
    always(target(...args))(target = always(undefined))

export default curry(once)
