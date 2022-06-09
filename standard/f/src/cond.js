import some from './some'
import T from './T'

export default (...targets) =>
  (...args) => {
    let output

    some(targets, ([can, process]) =>
      can(...args) && T(output = process(...args)))

    return output
  }
