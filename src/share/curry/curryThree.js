import { isGap } from '../__'
import curryOne from './curryOne'
import curryTwo from './curryTwo'

export default (target) =>
  function f3 (a, b, c) {
    switch (arguments.length) {
      case 0:
        return f3
      case 1:
        return isGap(a) ? f3
          : curryTwo((_b, _c) => target(a, _b, _c))
      case 2:
        return isGap(a) && isGap(b) ? f3
          : isGap(a) ? curryTwo((_a, _c) => target(_a, b, _c))
            : isGap(b) ? curryTwo((_b, _c) => target(a, _b, _c))
              : curryOne(_c => target(a, b, _c))
      default:
        return isGap(a) && isGap(b) && isGap(c) ? f3
          : isGap(a) && isGap(b) ? curryTwo((_a, _b) => target(_a, _b, c))
            : isGap(a) && isGap(c) ? curryTwo((_a, _c) => target(_a, b, _c))
              : isGap(b) && isGap(c) ? curryTwo((_b, _c) => target(a, _b, _c))
                : isGap(a) ? curryOne(_a => target(_a, b, c))
                  : isGap(b) ? curryOne(_b => target(a, _b, c))
                    : isGap(c) ? curryOne(_c => target(a, b, _c))
                      : target(a, b, c)
    }
  }
