import * as f from '@kuba/f'

export default (splash) =>
  f.not(f.truthy(localStorage.getItem(splash.id)))
