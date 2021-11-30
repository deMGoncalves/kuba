import * as f from '@kuba/f'
import button from './button'
import icon from './icon'

export default f.cond(
  [icon.is, f.always(icon)],
  [button.is, f.always(button)]
)
