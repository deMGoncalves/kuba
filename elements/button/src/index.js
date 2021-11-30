import * as f from '@kuba/f'
import button from './button'
import icon from './icon'

export default new Proxy({}, {
  get: (_, type) =>
    f.cond(
      [icon.is, icon],
      [button.is, button]
    )(type)
})
