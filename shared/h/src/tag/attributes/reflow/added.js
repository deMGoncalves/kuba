import * as f from '@kuba/f'

export default (current, attribute) =>
  f.and(f.not(current), attribute)
