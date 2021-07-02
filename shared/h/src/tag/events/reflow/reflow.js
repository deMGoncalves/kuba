import * as f from '@kuba/f'
import add from './add'
import added from './added'
import changed from './changed'
import different from './different'
import remove from './remove'
import removed from './removed'
import restrict from './restrict'

export default (that, events) =>
  f.forEach(
    f.zip(that.list, events.list),
    f.apply(f.cond(
      [added, add(that)],
      [removed, remove(that)],
      [changed, add(that)],
      [different, restrict(that)]
    ))
  )
