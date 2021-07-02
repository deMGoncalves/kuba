import some from './some'
import T from './T'

export default (...array) =>
  (...args) => {
    let result

    some(array, ([can, process]) =>
      can(...args) && T(result = process(...args)))

    return result
  }
