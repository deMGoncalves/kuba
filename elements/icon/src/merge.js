import * as f from '@kuba/f'

export default (props, name) =>
  f.add(name, props.onColor ? 'OnColor' : '')
