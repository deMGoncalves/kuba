import { isGap } from '../__'
import curryOne from './curryOne'

export default (target) =>
  function f2 (a, b) {
    switch (arguments.length) {
      case 0:
        return f2
      case 1:
        return isGap(a) ? f2
          : curryOne((_b) => target(a, _b))
      default:
        return isGap(a) && isGap(b) ? f2
          : isGap(a) ? curryOne(_a => target(_a, b))
            : isGap(b) ? curryOne(_b => target(a, _b))
              : target(a, b)
    }
  }
