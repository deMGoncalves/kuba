import * as f from '@kuba/f'

const render = (element, ...children) => {
  Promise
    .all(f.map(children, child => child.mount()))
    .then(children => element.append(...children))
}

export default f.curry(f.arity(2, render))
