import * as f from '@rex/f'
import mapComponent from './mapComponent'
import mapTextNode from './mapTextNode'

const appendChildren = async (children, node) =>
  f.always(node)(node.append(...mapTextNode(await Promise.all(mapComponent(children)))))

export default f.curry(appendChildren)
