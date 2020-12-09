import * as f from '@rex/f'
import h from './h'

const appendChildren = (children, node) =>
  f.always(node)(node.append(...f.map(children, h)))

export default f.curry(appendChildren)
