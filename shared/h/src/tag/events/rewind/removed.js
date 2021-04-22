import * as f from '@kuba/f'

export default (current, other) =>
  f.and(current, f.not(other))
