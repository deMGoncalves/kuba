import * as f from '@kuba/f'

export default (props) =>
  f.map(props.iterator, props.component)
