import __ from './__'

function oneParameter (functionRef) {
  return function evaluate (a) {
    if (arguments.length === 0 || __.is(a)) return evaluate
    return functionRef(...arguments)
  }
}

Object.assign(oneParameter, {
  is: (functionRef) => functionRef.length === 1
})

export default oneParameter
