import always from './always'

const once = (target) =>
  (...args) => (
    always(target(...args))(target = always(undefined))
  )

export default once
