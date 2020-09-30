import * as f from '@rex/f'
import frame from '@rex/h/src/frame'

export default (element) =>
  frame((key, value) => {
    element.__attributes__ = f.concat(f.or(element.__attributes__, []), key)
    value && element.setAttribute(key, value)
  })
