import * as f from '@kuba/f'
import button from './button'
import icon from './icon'
import naked from './naked'

export default new Proxy({}, {
  get: (_, type) =>
    f.cond(
      [icon.is, icon],
      [naked.is, naked],
      [button.is, button]
    )(type)
})
