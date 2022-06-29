import * as f from '@kuba/f'

export default (props) => (
  f.i(f.map)(props.iterator, props.component)
)
