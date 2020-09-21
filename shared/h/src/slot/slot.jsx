import * as f from '@rex/f'

const slot = (children) =>
  new Proxy(children, {
    get: (_, name) =>
      f.or(children[name], f.find(children, (child) => f.equal(name, f.prop('slot', child))))
  })

export default f.curry(slot)
