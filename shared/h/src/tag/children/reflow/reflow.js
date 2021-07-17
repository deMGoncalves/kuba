import * as f from '@kuba/f'
import Added from './added'
import Different from './different'
import DifferentEntity from './differentEntity'
import Equal from './equal'
import EqualEntity from './equalEntity'
import Removed from './removed'

export default (children, other) => (
  f.forEach(
    f.zip(children.list, other.list),
    f.apply(f.cond(
      [Added.is, Added.exec(children)],
      [Removed.is, Removed.exec(children)],
      [Different.is, Different.exec(children)],
      [DifferentEntity.is, DifferentEntity.exec(children)],
      [EqualEntity.is, EqualEntity.exec],
      [Equal.is, Equal.exec]
    ))
  )
)
