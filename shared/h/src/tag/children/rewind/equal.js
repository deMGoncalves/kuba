import * as f from '@kuba/f'

export default (current, other) =>
  f.and(
    f.equal(current.type, other.type),
    f.equal(current.name, other.name)
  )
