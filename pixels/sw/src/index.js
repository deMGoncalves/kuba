import * as f from '@rex/f'
import agent from '@rex/agent'
import env from '@rex/env'
import register from './register'

f.and(
  agent.isUser,
  env.isProd,
  f.has('serviceWorker', navigator)
) && register()
