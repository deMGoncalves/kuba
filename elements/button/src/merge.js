import * as f from '@kuba/f'

export default (props, type) => ({
  ...props,
  [f.toLower(type)]: f.T()
})
