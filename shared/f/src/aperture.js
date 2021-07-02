import curry from './curry'
import len from './len'
import push from './push'
import splice from './splice'

const aperture = (n, array) => {
  const result = []
  array = [...array]

  while (len(array)) {
    push(result, splice(array, 0, n))
  }

  return result
}

export default curry(aperture)
