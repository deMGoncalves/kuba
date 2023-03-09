function zeroParameter (functionRef) {
  return function () {
    return functionRef(...arguments)
  }
}

Object.assign(zeroParameter, {
  is: (functionRef) => functionRef.length === 0
})

export default zeroParameter
