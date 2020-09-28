import * as f from '@rex/f'

export default (handler) =>
  (e) =>
    handler(f.always(e)(e.stopPropagation()))
