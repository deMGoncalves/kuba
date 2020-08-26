import { isGap } from '@rex/f/src/gap'

export default (target) =>
  function callback (a0) {
    if (arguments.length === 0 || isGap(a0)) {
      return callback
    }

    return target.call(this, ...arguments)
  }
