import * as f from '@kuba/f'
import icon from './icon'
import master from './master'
import naked from './naked'

export default new Proxy({}, {
  get: (_, type) =>
    f.cond(
      [icon.is, icon],
      [naked.is, naked],
      [master.is, master]
    )(type)
})
