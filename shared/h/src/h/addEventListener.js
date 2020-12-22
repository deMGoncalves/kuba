import * as f from '@rex/f'

const addEventListener = (node, name, listener) =>
  f.always(node)(node[f.toLower(name)] = listener)

export default f.curry(f.arity(3, addEventListener))
