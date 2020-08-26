import oneParameter from '@rex/f/src/curry/oneParameter'
import { isGap } from '@rex/f/src/gap'

export default (target) =>
  function callback (a0, a1) {
    switch (arguments.length) {
      case 0:
        return callback
      case 1:
        return isGap(a0)
          ? callback
          : oneParameter((...args) => target(a0, ...args))
      default:
        return isGap(a0) && isGap(a1)
          ? callback
          : isGap(a0)
            ? oneParameter((_a0, ...args) => target(_a0, a1, ...args))
            : isGap(a1)
              ? oneParameter((...args) => target(a0, ...args))
              : target(...arguments)
    }
  }
