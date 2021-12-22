import * as f from '@kuba/f'

export default (props, type) =>
  ({ ...props, type: f.toLower(type) })
