import * as f from '@kuba/f'
import bots from './bots'
import agent from './agent'

export default f.or(f.isEmpty(agent), f.test(bots, agent))
