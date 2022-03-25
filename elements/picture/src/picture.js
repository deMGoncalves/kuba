import * as f from '@kuba/f'
import skeleton from '@kuba/skeleton'
import component from './component'

export default (props, children) => (
  f.len([...children])
    ? component(props, children)
    : skeleton.picture(props)
)
