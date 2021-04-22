import * as f from '@kuba/f'

export default (current, other) =>
  f.and(f.not(current), other)
