import * as f from '@rex/f'

export default (vElement) =>
  []
    .slice
    .call(f.or(vElement.__events__, []))
    .reduce((reducer, event) =>
      ({ ...reducer, [event]: vElement[event] }), {})
