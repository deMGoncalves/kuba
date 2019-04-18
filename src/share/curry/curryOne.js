import { isGap } from '../__'

export default (target) =>
  function f1 (a) {
    switch (arguments.length) {
      case 0:
        return f1
      default:
        return isGap(a) ? f1 : target(a)
    }
  }
