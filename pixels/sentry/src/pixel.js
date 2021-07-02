import * as f from '@kuba/f'
import agent from '@kuba/agent'
import env from '@kuba/env'
import sentry from './sentry'

f.and(agent.isUser, env.isProd) && (
  sentry()
)
