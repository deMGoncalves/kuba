import * as f from '@kuba/f'
import discovery from '@kuba/discovery'

export default (shape) =>
  discovery
    .serie('material')
    .toScore(
      f
        .from(shape?.material)
        .pipe(f.or(f.__, []))
        .pipe(f.map(f.__, f.prop('valor')))
        .done()
    )
