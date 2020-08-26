import { isGap } from '../gap'

export default (target) =>
  function f1 (a0) {
    if (arguments.length === 0 || isGap(a0)) {
      return f1
    }

    return target.call(this, ...arguments)
  }
