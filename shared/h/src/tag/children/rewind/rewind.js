import * as f from '@kuba/f'
import added from './added'
import append from './append'
import different from './different'
import differentEntity from './differentEntity'
import equal from './equal'
import equalEntity from './equalEntity'
import next from './next'
import reflow from './reflow'
import remove from './remove'
import removed from './removed'
import replace from './replace'

export default (children, other) => (
  f.forEach(
    f.zip(children.list, other.list),
    f.apply(f.cond(
      [added, append(children)],
      [removed, remove(children)],
      [different, replace(children)],
      [differentEntity, replace(children)],
      [equalEntity, next],
      [equal, reflow]
    ))
  )
)
