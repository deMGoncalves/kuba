import * as f from '@kuba/f'

export default (current, attribute) =>
  f.different(current.key, attribute.key)
