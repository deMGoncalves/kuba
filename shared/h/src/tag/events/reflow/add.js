import * as f from '@kuba/f'

const add = (that, _, event) =>
  that.addEventListener(event.name, event.listener)

export default f.curry(add)
