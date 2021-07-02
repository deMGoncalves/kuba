import * as f from '@kuba/f'

export default (current, event) =>
  f.different(current.name, event.name)
