import * as f from '@kuba/f'
import evaluate from './evaluate'

export default (events, newEvents) =>
  new Promise((resolve) => (
    f
      .from([events, newEvents])
      .pipe(f.map(f.__, f.toArray))
      .pipe(f.apply(f.zip))
      .pipe(f.forEach(f.__, f.apply(evaluate(events))))
      .done(),

    resolve()
  ))
