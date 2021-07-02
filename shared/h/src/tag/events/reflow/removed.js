import * as f from '@kuba/f'

export default (current, event) =>
  f.and(current, f.not(event))
