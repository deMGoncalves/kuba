import * as f from '@kuba/f'

export default (splash) =>
  f.isFalsy(localStorage.getItem(splash.id))
