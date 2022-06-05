import * as f from '@kuba/f'
import Added from './added'
import Changed from './changed'
import Different from './different'
import Removed from './removed'

export default (that, attributes) => (
  f.forEach(
    f.zip(f.toArray(that), f.toArray(attributes)),
    f.apply(f.cond(
      [Added.is, Added.exec(that)],
      [Removed.is, Removed.exec(that)],
      [Changed.is, Changed.exec(that)],
      [Different.is, Different.exec(that)]
    ))
  )
)
