import * as f from '@kuba/f'

export default (current, child) =>
  f.and(f.not(current), child)
