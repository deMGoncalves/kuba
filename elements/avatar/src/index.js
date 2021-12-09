import * as f from '@kuba/f'
import avatar from './avatar'
import icon from './icon'

export default new Proxy(avatar, {
  get: (_, type) =>
    f.cond(
      [icon.is, icon]
    )(type)
})
