import T from './T'

export default (...pairs) =>
  (...args) => {
    let result

    pairs.some(([can, process]) =>
      can(...args) && T(result = process(...args)))

    return result
  }
