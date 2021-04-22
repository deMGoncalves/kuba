import * as f from '@kuba/f'

const offScreen = (node) =>
  f.gt(f.subtract(node.getBoundingClientRect().top, window.innerHeight), window.innerHeight)

export default f.curry(offScreen)
