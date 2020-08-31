import oneParameter from '@rex/f/src/curry/oneParameter'
import twoParameters from '@rex/f/src/curry/twoParameters'
import { isGap } from '@rex/f/src/gap'

export default (target) =>
  function callback (a0, a1, a2) {
    switch (arguments.length) {
      case 0:
        return callback
      case 1:
        return isGap(a0)
          ? callback
          : twoParameters((...args) => target(a0, ...args))
      case 2:
        return isGap(a0) && isGap(a1)
          ? callback
          : isGap(a0)
            ? twoParameters((_a0, ...args) => target(_a0, a1, ...args))
            : isGap(a1)
              ? twoParameters((...args) => target(a0, ...args))
              : oneParameter((...args) => target(a0, a1, ...args))
      default:
        return isGap(a0) && isGap(a1) && isGap(a2)
          ? callback
          : isGap(a0) && isGap(a1)
            ? twoParameters((_a0, _a1, ...args) => target(_a0, _a1, a2, ...args))
            : isGap(a0) && isGap(a2)
              ? twoParameters((_a0, ...args) => target(_a0, a1, ...args))
              : isGap(a1) && isGap(a2)
                ? twoParameters((...args) => target(a0, ...args))
                : isGap(a0)
                  ? oneParameter((_a0, ...args) => target(_a0, a1, a2, ...args))
                  : isGap(a1)
                    ? oneParameter((_a1, ...args) => target(a0, _a1, a2, ...args))
                    : isGap(a2)
                      ? oneParameter((...args) => target(a0, a1, ...args))
                      : target(...arguments)
    }
  }
