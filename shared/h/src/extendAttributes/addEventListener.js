import * as f from '@rex/f'
import eventMapper from './eventMapper'

const addEventListener = (node, name, listener) =>
  f.always(node)(node[eventMapper(node, f.toLower(name))] = listener)

export default f.curry(f.arity(3, addEventListener))
