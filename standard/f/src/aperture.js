import curry from './curry'
import len from './len'
import push from './push'
import splice from './splice'

const aperture = (n, target) => {
  const result = []
  target = [...target]

  while (len(target)) {
    push(result, splice(target, 0, n))
  }

  return result
}

export default curry(aperture)
