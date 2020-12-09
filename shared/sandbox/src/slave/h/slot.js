import * as f from '@rex/f'

export default (children) =>
  new Proxy(children, {
    get: (_, name) =>
      f.find(children, f.compose(f.equal(name), f.prop('slot')))
  })
