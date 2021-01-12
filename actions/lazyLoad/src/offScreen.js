import * as f from '@rex/f'

const offScreen = (node) =>
  f.gt(f.subtract(node.getBoundingClientRect().top, window.innerHeight), window.innerHeight)

export default f.curry(offScreen)
