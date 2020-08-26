import oneParameter from '@rex/f/src/curry/oneParameter'
import { isGap } from '@rex/f/src/gap'

export default (target) =>
  function f2 (a0, a1) {
    switch (arguments.length) {
      case 0:
        return f2
      case 1:
        return isGap(a0)
          ? f2
          : oneParameter((...args) => target.call(this, a0, ...args))
      default:
        return isGap(a0) && isGap(a1)
          ? f2
          : isGap(a0)
            ? oneParameter((_a0, ...args) => target.call(this, _a0, a1, ...args))
            : isGap(a1)
              ? oneParameter((...args) => target.call(this, a0, ...args))
              : target.call(this, ...arguments)
    }
  }
