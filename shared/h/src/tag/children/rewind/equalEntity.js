import * as f from '@kuba/f'

export default (current, other) =>
  f.and(
    f.isNil(current.type),
    f.isNil(other.type),
    f.equal(current, other)
  )
