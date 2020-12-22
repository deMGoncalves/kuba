import * as f from '@rex/f'
import mapComponent from './mapComponent'
import mapTextNode from './mapTextNode'

const append = (children, node) =>
  f.always(node)(node.append(...mapTextNode(mapComponent(children))))

export default f.curry(append)
