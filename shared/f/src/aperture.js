import arity from '@rex/f/src/arity'
import curry from '@rex/f/src/curry'
import len from '@rex/f/src/len'
import push from '@rex/f/src/push'
import splice from '@rex/f/src/splice'

const aperture = (x, y, z = []) => {
  y = [...y]

  while (len(y)) { push(z, splice(y, 0, x)) }
  return z
}

export default curry(arity(2, aperture))
