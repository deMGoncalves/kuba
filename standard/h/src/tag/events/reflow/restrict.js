import * as f from '@kuba/f'

const restrict = (that, current, event) =>
  that
    .removeEventListener(current.name)
    .addEventListener(event.name, event.listener)

export default f.curry(restrict)
