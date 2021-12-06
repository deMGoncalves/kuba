import * as f from '@kuba/f'

export default (props) =>
  f
    .from(props.className)
    .pipe(f.or(f.__, []))
    .pipe(f.concat([]))
    .pipe(f.filter(f.__, f.isTruthy))
    .pipe(f.flatten)
    .pipe(f.join(f.__, ' '))
    .done()
