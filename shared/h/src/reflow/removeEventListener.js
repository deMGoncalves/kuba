import * as f from '@rex/f'

export default (node) =>
  f.always(node)(
    f.forEach(f.or(node.__events__, []), (event) =>
      (node[event] = undefined)))
