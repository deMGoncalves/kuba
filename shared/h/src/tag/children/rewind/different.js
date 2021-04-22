import * as f from '@kuba/f'

export default (current, other) =>
  f.or(
    f.different(current.type, other.type),
    f.different(current.name, other.name)
  )
