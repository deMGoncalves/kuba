import * as f from '@kuba/f'

export default (map) =>
  f.map([...map], ([key, value]) => ({ key, value }))
