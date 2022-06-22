import * as f from '@kuba/f'

const append = (element, children) => (
  Promise
    .all(f.map(children, child => child.mount()))
    .then(children => element.element.append(...children))
)

export default append
