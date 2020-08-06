import arity from './arity'
import curry from './curry'

const aperture = (n, target, result = []) => {
  target = [...target]

  while (target.length) { result.push(target.splice(0, n)) }

  return result
}

export default curry(arity(2, aperture))
