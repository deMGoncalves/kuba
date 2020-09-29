import * as f from '@rex/f'
import agents from './agents'
import user from './user'

export default f.or(f.isEmpty(user), f.test(agents, user))
