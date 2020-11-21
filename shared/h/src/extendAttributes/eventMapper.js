import * as f from '@rex/f'

export default (node, name) =>
  f.always(name)(node.__events__ = f.concat(f.or(node.__events__, []), name))
