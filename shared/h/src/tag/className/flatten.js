import * as f from '@kuba/f'

export default (props) =>
  f.join(f.flatten(f.concat([], f.or(props.className, []))), ' ')
