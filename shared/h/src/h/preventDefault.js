import * as f from '@rex/f'

export default (listener) =>
  (e) =>
    listener(f.always(e)(e.preventDefault()))
