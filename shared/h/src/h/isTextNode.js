import * as f from '@rex/f'

export default (target) =>
  f.or(f.is(String, target), f.is(Number, target))
