import skeleton from '@kuba/skeleton'
import has from './has'
import link from './link'

export default new Proxy({}, {
  get: (_, type) =>
    (props, children) =>
      has(children)
        ? link[type](props, children)
        : skeleton.link(props)
})
