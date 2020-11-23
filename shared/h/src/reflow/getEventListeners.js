import * as f from '@rex/f'

export default (vNode) =>
  []
    .slice
    .call(f.or(vNode.__events__, []))
    .reduce((reducer, event) =>
      ({ ...reducer, [event]: vNode[event] }), {})
