import arity from './arity'
import curry from './curry'
import len from './len'
import push from './push'
import splice from './splice'

const aperture = (x, y, z = []) => {
  y = [...y]

  while (len(y)) { push(z, splice(y, 0, x)) }
  return z
}

export default curry(arity(2, aperture))
