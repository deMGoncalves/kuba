import { isGap } from '@start/f/src/gap'
import oneParameter from './oneParameter'
import twoParameters from './twoParameters'

export default (func) =>
  function callback (a, b, c) {
    switch (arguments.length) {
      case 0:
        return callback
      case 1:
        return isGap(a)
          ? callback
          : twoParameters((...args) => func(a, ...args))
      case 2:
        return isGap(a) && isGap(b)
          ? callback
          : isGap(a)
            ? twoParameters((_a, ...args) => func(_a, b, ...args))
            : isGap(b)
              ? twoParameters((...args) => func(a, ...args))
              : oneParameter((...args) => func(a, b, ...args))
      default:
        return isGap(a) && isGap(b) && isGap(c)
          ? callback
          : isGap(a) && isGap(b)
            ? twoParameters((_a, _b, ...args) => func(_a, _b, c, ...args))
            : isGap(a) && isGap(c)
              ? twoParameters((_a, ...args) => func(_a, b, ...args))
              : isGap(b) && isGap(c)
                ? twoParameters((...args) => func(a, ...args))
                : isGap(a)
                  ? oneParameter((_a, ...args) => func(_a, b, c, ...args))
                  : isGap(b)
                    ? oneParameter((_b, ...args) => func(a, _b, c, ...args))
                    : isGap(c)
                      ? oneParameter((...args) => func(a, b, ...args))
                      : func(...arguments)
    }
  }
