import * as f from '@kuba/f'
import evaluate from './evaluate'

export default (children, newChildren) =>
  new Promise((resolve) => (
    f
      .from([children, newChildren])
      .pipe(f.map(f.__, f.toArray))
      .pipe(f.apply(f.zip))
      .pipe(f.forEach(f.__, f.apply(evaluate(children))))
      .done(),

    resolve()
  ))
