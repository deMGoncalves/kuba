import * as f from '@kuba/f'

export default (name, props) =>
  f.add(name, props.onColor ? 'OnColor' : '')
