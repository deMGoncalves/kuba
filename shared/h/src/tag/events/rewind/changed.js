import * as f from '@kuba/f'

export default (current, other) =>
  f.and(
    f.equal(current.name, other.name),
    f.different(current.listener, other.listener)
  )
