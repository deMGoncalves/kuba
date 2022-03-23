import * as f from '@kuba/f'
import agent from '@kuba/agent'
import env from '@kuba/env'
import register from './register'

f.and(
  agent.isUser,
  env.isProd,
  f.has('serviceWorker', navigator)) && (
  register()
)
