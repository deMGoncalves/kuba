import len from './len'
import push from './push'
import splice from './splice'

const aperture = (n, target) => {
  const output = []
  target = [...target]

  while (len(target)) {
    push(output, splice(target, 0, n))
  }

  return output
}

export default aperture
