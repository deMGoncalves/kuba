import * as f from '@kuba/f'

export default (children) =>
  f.some([...children], f.compose(f.not, f.isEmpty))
