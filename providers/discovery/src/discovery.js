import * as f from '@kuba/f'
import serie from './serie'

export default new Proxy({}, {
  get (_, method) {
    return f.test(/serie/, method)
      ? serie
      : f.always(null)
  }
})
