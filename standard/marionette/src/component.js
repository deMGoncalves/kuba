import * as f from '@kuba/f'

export default (component) =>
  new Proxy(
    (props, children) => (
      component(
        new Proxy({}, {
          get: (_, key) => {
            const method = (props[f.magic(key)] ?? props[key])
            return f.is(Function, method)
              ? method.bind(props)
              : method
          }
        }),
        children
      )
    ),
    {
      get: (_, key) => f.dunder[key]
    }
  )
