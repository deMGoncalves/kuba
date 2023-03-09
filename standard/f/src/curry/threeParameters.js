import __ from './__'
import oneParameter from './oneParameter'
import twoParameters from './twoParameters'

function threeParameters (functionRef) {
  return function evaluate (a, b, c) {
    switch (arguments.length) {
      case 0:
        return evaluate
      case 1:
        return __.is(a)
          ? evaluate
          : twoParameters((...args) => functionRef(a, ...args))
      case 2:
        return __.is(a) && __.is(b)
          ? evaluate
          : __.is(a)
            ? twoParameters((_a, ...args) => functionRef(_a, b, ...args))
            : __.is(b)
              ? twoParameters((...args) => functionRef(a, ...args))
              : oneParameter((...args) => functionRef(a, b, ...args))
      default:
        return __.is(a) && __.is(b) && __.is(c)
          ? evaluate
          : __.is(a) && __.is(b)
            ? twoParameters((_a, _b, ...args) => functionRef(_a, _b, c, ...args))
            : __.is(a) && __.is(c)
              ? twoParameters((_a, ...args) => functionRef(_a, b, ...args))
              : __.is(b) && __.is(c)
                ? twoParameters((...args) => functionRef(a, ...args))
                : __.is(a)
                  ? oneParameter((_a, ...args) => functionRef(_a, b, c, ...args))
                  : __.is(b)
                    ? oneParameter((_b, ...args) => functionRef(a, _b, c, ...args))
                    : __.is(c)
                      ? oneParameter((...args) => functionRef(a, b, ...args))
                      : functionRef(...arguments)
    }
  }
}

Object.assign(threeParameters, {
  is: (functionRef) => functionRef.length === 3
})

export default threeParameters
