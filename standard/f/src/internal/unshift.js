import always from './always'

const unshift = (target, ...args) => (
  always(target)(target?.unshift?.(...args))
)

export default unshift
