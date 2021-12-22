import always from './always'
import curry from './curry'

const once = (func) =>
  (...args) =>
    always(func(...args))(func = always(undefined))

export default curry(once)
