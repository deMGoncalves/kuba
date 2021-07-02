import * as f from '@kuba/f'

export default (current, child) =>
  f.and(current, f.not(child))
