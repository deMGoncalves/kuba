import * as f from '@rex/f'
import agent from '@rex/agent'
import register from './register'

f.and(
  agent.isUser,
  f.equal(process.env.NODE_ENV, 'production'),
  f.has('serviceWorker', navigator)
) && register()
