import * as f from '@rex/f'

export default (element) =>
  f.always(element)(
    f.forEach(f.or(element.__attributes__, []), (key) =>
      element.removeAttribute(key)))
