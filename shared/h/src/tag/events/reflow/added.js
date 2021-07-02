import * as f from '@kuba/f'

export default (current, event) =>
  f.and(f.not(current), event)
