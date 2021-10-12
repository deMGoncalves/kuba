import * as f from '@kuba/f'
import button from './button'
import ghost from './ghost'

export default f.cond(
  [ghost.is, f.always(ghost)],
  [button.is, f.prop(f.__, button)]
)