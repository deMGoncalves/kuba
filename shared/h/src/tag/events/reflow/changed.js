import * as f from '@kuba/f'

export default (current, event) =>
  f.and(
    f.equal(current.name, event.name),
    f.different(current.listener, event.listener)
  )
