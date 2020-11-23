import * as d from '@rex/h/src/dunders'
import * as f from '@rex/f'

export default (vNode) =>
  []
    .slice
    .call(f.or(vNode[d.__events__], []))
    .reduce((reducer, event) =>
      ({ ...reducer, [event]: vNode[event] }), {})
