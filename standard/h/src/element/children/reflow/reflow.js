import * as f from '@kuba/f'
import Added from './added'
import Different from './different'
import DifferentEntity from './differentEntity'
import Equal from './equal'
import EqualEntity from './equalEntity'
import EqualUID from './equalUID'
import Removed from './removed'

export default function (children) {
  const evaluate = f.cond(
    [Added.is, Added.exec(children)],
    [Removed.is, Removed.exec(children)],
    [Different.is, Different.exec(children)],
    [EqualUID.is, EqualUID.exec(children)],
    [EqualEntity.is, EqualEntity.exec(children)],
    [DifferentEntity.is, DifferentEntity.exec(children)],
    [Equal.is, Equal.exec(children)]
  )

  return new Promise((resolve) => (
    f
      .from([...arguments])
      .pipe(f.map(f.__, f.toArray))
      .pipe(f.apply(f.zip))
      .pipe(f.forEach(f.__, f.apply(evaluate)))
      .done(),

    resolve()
  ))
}
