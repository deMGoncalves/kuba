import * as f from '@rex/f'

export default (node, key) =>
  f.always(key)(node.__attributes__ = f.concat(f.or(node.__attributes__, []), key))
