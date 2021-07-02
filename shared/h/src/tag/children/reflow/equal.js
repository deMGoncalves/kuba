import * as f from '@kuba/f'

export default (current, child) =>
  f.and(
    f.equal(current.type, child.type),
    f.equal(current.name, child.name)
  )
