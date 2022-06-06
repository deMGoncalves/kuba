import * as f from '@kuba/f'

export default (children) =>
  new Proxy(children, {
    get: (target, name) => (
      f.is(Symbol, name)
        ? target[name]
        : target[name] ?? f.filter(target, f.compose(f.equal(name), f.prop('slot')))
    )
  })
