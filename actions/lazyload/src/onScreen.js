import * as f from '@kuba/f'

const onScreen = (node) =>
  f.lte(f.subtract(node.getBoundingClientRect().top, window.innerHeight), window.innerHeight)

export default f.curry(onScreen)
