import * as f from '@kuba/f'
import added from './added'
import changed from './changed'
import different from './different'
import equal from './equal'
import extend from './extend'
import removed from './removed'
import restrict from './restrict'

export default (attributes, other) =>
  f.forEach(
    f.zip(attributes.list, other.list),
    f.apply(f.cond(
      [added, extend(attributes)],
      [removed, restrict(attributes)],
      [changed, extend(attributes)],
      [different, restrict(attributes)],
      [equal, extend(attributes)]
    ))
  )
