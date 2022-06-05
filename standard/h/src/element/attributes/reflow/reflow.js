import * as f from '@kuba/f'
import evaluate from './evaluate'

export default (attributes, newAttributes) =>
  new Promise((resolve) => (
    f
      .from([attributes, newAttributes])
      .pipe(f.map(f.__, f.toArray))
      .pipe(f.apply(f.zip))
      .pipe(f.forEach(f.__, f.apply(evaluate(attributes))))
      .done(),

    resolve()
  ))
