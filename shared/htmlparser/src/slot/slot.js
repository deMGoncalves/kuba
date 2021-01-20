import * as f from '@rex/f'

export default (children) =>
  new Proxy(children, {
    get: (_, key) =>
      f.or(children[key], f.find(children, f.compose(f.equal(key), f.prop('attributes.slot'))))
  })
