import * as f from '@kuba/f'

export default (component) =>
  new Proxy(
    (props, children) => (
      component(
        new Proxy({}, {
          get: (_, key) => (
            f.has(f.dunder[key], props)
              ? f.dunder(key, props)
              : f.is(Function, props[key])
                ? props[key].bind(props)
                : props[key]
          )
        }),
        children
      )
    ),
    {
      get: (_, key) => f.dunder[key]
    }
  )
