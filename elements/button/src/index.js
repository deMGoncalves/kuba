import skeleton from '@kuba/skeleton'
import has from './has'
import mapper from './mapper'

export default (props, children) =>
  has(children)
    ? mapper(props, children)
    : skeleton.button(props)
