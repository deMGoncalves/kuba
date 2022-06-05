import * as f from '@kuba/f'

const render = (element, ...children) => {
  Promise
    .all(f.map(children, child => child.mount()))
    .then(f.frame(children => element.append(...children)))
}

export default f.curry(f.arity(2, render))
