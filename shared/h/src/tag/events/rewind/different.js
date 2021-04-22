import * as f from '@kuba/f'

export default (current, other) =>
  f.different(current.name, other.name)
