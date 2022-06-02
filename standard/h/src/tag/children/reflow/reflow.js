import * as f from '@kuba/f'
import Added from './added'
import Different from './different'
import DifferentEntity from './differentEntity'
import Equal from './equal'
import EqualEntity from './equalEntity'
import EqualUID from './equalUID'
import Removed from './removed'

export default (children, vChildren) => (
  f.forEach(
    f.zip(f.toArray(children), f.toArray(vChildren)),
    f.apply(f.cond(
      [Added.is, Added.exec(children)],
      [Removed.is, Removed.exec(children)],
      [Different.is, Different.exec(children)],
      [EqualUID.is, EqualUID.exec(children)],
      [EqualEntity.is, EqualEntity.exec(children)],
      [DifferentEntity.is, DifferentEntity.exec(children)],
      [Equal.is, Equal.exec(children)]
    ))
  )
)
