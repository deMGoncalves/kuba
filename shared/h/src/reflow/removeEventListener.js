import * as f from '@rex/f'

export default (element) =>
  f.always(element)(
    f.forEach(f.or(element.__events__, []), (event) =>
      (element[event] = undefined)))
