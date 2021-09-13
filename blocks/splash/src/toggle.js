import * as f from '@kuba/f'

export default (splash) =>
  f.not(f.truthy(sessionStorage.getItem(splash.id)))
