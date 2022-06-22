import * as f from '@kuba/f'

const append = (parent, children) => (
  Promise
    .all(f.map(children, child => child.mount()))
    .then(children => parent.element.append(...children))
)

export default append
