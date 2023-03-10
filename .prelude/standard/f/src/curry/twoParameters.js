import __ from './__'
import oneParameter from './oneParameter'

function twoParameters (functionRef) {
  return function evaluate (a, b) {
    switch (arguments.length) {
      case 0:
        return evaluate
      case 1:
        return __.is(a)
          ? evaluate
          : oneParameter((...args) => functionRef(a, ...args))
      default:
        return __.is(a) && __.is(b)
          ? evaluate
          : __.is(a)
            ? oneParameter((_a, ...args) => functionRef(_a, b, ...args))
            : __.is(b)
              ? oneParameter((...args) => functionRef(a, ...args))
              : functionRef(...arguments)
    }
  }
}

Object.assign(twoParameters, {
  is: (functionRef) => functionRef.length === 2
})

export default twoParameters
