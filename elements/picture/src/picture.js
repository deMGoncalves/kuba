import * as f from '@kuba/f'
import component from './component'
import skeleton from '@kuba/skeleton'

export default (props, children) => (
  f.len([...children])
    ? component(props, children)
    : skeleton.picture(props)
)
