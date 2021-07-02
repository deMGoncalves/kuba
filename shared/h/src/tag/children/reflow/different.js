import * as f from '@kuba/f'

export default (current, child) =>
  f.or(
    f.different(current.type, child.type),
    f.different(current.name, child.name)
  )
