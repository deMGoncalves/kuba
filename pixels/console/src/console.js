import * as f from '@kuba/f'
import stub from './stub'

export default () => (
  f
    .from(console)
    .pipe(Object.getOwnPropertyNames)
    .pipe(f.forEach(f.__, f.set(f.__, stub, console)))
    .done()
)
