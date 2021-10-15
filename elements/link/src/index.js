import skeleton from '@kuba/skeleton'
import has from './has'
import link from './link'

export default (props, children) =>
  has(children)
    ? link(props, children)
    : skeleton.link(props)
