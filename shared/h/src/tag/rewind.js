import * as f from '@kuba/f'

export default (current, other) =>
  f.forEach(
    ['attributes', 'className', 'events'],
    (attribute) =>
      current[attribute].reflow(other[attribute])
  )
