import * as f from '@kuba/f'

export default (serie) =>
  JSON.parse(f.or(localStorage.getItem(`_ml.${serie}`), '{}'))
