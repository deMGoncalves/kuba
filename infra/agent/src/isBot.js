import * as f from '@kuba/f'
import agent from './agent'
import bots from './bots'

export default f.or(f.isEmpty(agent), f.test(bots, agent))
