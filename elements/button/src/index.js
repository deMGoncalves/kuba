import skeleton from '@kuba/skeleton'
import has from './has'
import button from './button'

export default new Proxy({}, {
  get: (_, type) =>
    (props, children) =>
      has(children)
        ? button[type](props, children)
        : skeleton.button(props)
})
