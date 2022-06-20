import some from './some'
import T from './T'

const cond = (...targets) =>
  (...args) => {
    let output

    some(targets, ([can, process]) =>
      can(...args) && T(output = process(...args)))

    return output
  }

export default cond
