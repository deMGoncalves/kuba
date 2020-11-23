import * as d from '@rex/h/src/dunders'
import * as f from '@rex/f'

export default (node) =>
  f.always(node)(
    f.forEach(f.or(node[d.__attributes__], []), (key) =>
      node.removeAttribute(key)))
