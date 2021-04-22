import * as f from '@kuba/f'

const restrict = (events, current, other = {}) =>
  events
    .removeItem(current.name)
    .setItem(other.name, other.listener)

export default f.curry(restrict)
