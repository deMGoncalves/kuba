import * as f from '@kuba/f'

export default (map) =>
  f.map([...map], ([name, listener]) => ({ name, listener }))
