import * as f from '@kuba/f'
import added from './added'
import changed from './changed'
import different from './different'
import extend from './extend'
import removed from './removed'
import restrict from './restrict'

export default (events, other) =>
  f.forEach(
    f.zip(events.list, other.list),
    f.apply(f.cond(
      [added, extend(events)],
      [removed, restrict(events)],
      [changed, extend(events)],
      [different, restrict(events)]
    ))
  )
