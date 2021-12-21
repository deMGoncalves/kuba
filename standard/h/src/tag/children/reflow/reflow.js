import * as f from '@kuba/f'
import Added from './added'
import Different from './different'
import DifferentComponent from './differentComponent'
import DifferentEntity from './differentEntity'
import Equal from './equal'
import EqualComponent from './equalComponent'
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
      [DifferentComponent.is, DifferentComponent.exec(children)],
      [EqualEntity.is, EqualEntity.exec(children)],
      [EqualComponent.is, EqualComponent.exec(children)],
      [Equal.is, Equal.exec(children)]
    ))
  )
)
