import * as f from '@kuba/f'

const remove = (target) => (
  new Promise(f.frame((resolve) => (
    target.element.remove(),
    resolve()
  )))
)

export default remove
