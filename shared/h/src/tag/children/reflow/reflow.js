import * as f from '@kuba/f'
import Added from './added'
import Different from './different'
import differentEntity from './differentEntity'
import equal from './equal'
import equalEntity from './equalEntity'
import next from './next'
import Removed from './removed'
import replace from './replace'
import stop from './stop'

export default (children, other) => (
  f.forEach(
    f.zip(children.list, other.list),
    f.apply(f.cond(
      [Added.is, Added.exec(children)],
      [Removed.is, Removed.exec(children)],
      [Different.is, Different.exec(children)],
      [differentEntity, replace(children)],
      [equalEntity, stop],
      [equal, next]
    ))
  )
)
