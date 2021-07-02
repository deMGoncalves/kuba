import * as f from '@kuba/f'

export default (current, attribute) =>
  f.and(current, f.not(attribute))
