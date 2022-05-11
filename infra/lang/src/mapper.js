import * as f from '@kuba/f'
import hub from './hub'

export default f.cond(
  [f.test(/^en(-US)?/i), f.always(hub.EN)],
  [f.test(/^es/i), f.always(hub.ES)],
  [f.test(/^pt(-BR)?/i), f.always(hub.PT)]
)
