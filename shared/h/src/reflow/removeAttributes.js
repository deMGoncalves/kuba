import * as f from '@rex/f'
import frame from '@rex/h/src/frame'

export default (element) =>
  f.always(element)(
    f.forEach(f.or(element.__attributes__, []), frame((key) =>
      element.removeAttribute(key))))
