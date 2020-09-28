import * as f from '@rex/f'

export default (target) =>
  f.or(f.is(Function, target), f.test(/function/, typeof target))
