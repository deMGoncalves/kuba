import * as f from '@kuba/f'

export default (children) =>
  new Proxy(children, {
    get: (target, name) =>
      f.or(target[name], f.filter(target, f.compose(f.equal(name), f.prop('slot'))))
  })
