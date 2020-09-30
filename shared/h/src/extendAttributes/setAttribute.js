import * as f from '@rex/f'

export default (element) =>
  (key, value) => {
    element.__attributes__ = f.concat(f.or(element.__attributes__, []), key)
    value && element.setAttribute(key, value)
  }
