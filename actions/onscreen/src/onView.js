import * as f from '@kuba/f'

const onView = (node) =>
  f.lte(f.subtract(node.getBoundingClientRect().top, window.innerHeight), (window.innerHeight * 0.2))

export default f.curry(onView)
