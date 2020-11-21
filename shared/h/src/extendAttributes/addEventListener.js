import * as f from '@rex/f'
import setEvent from './setEvent'

const addEventListener = (node, name, listener) =>
  f.always(node)(node[setEvent(node, f.toLower(name))] = listener)

export default f.curry(f.arity(3, addEventListener))
