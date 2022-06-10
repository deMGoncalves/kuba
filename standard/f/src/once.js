import always from './always'
import curry from './curry'

const once = (target) =>
  (...args) => (
    always(target(...args))(target = always(undefined))
  )

export default curry(once)
