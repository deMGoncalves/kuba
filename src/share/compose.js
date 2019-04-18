// import { flip } from './'
import flip from './flip'

export default flip(
  (first, ...others) =>
    (...args) =>
      others.reduce(
        (result, target) => target(result),
        first(...args)
      )
)
