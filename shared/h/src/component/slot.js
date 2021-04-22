import * as f from '@kuba/f'

export default (children) =>
  new Proxy(
    children,
    {
      get: (target, slotName) =>
        f.or(target[slotName], f.filter(target, f.compose(f.equal(slotName), f.prop('slot'))))
    }
  )
