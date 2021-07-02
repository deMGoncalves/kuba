import * as f from '@kuba/f'
import agent from '@kuba/agent'
import env from '@kuba/env'
import boma from './boma'

f.equal(agent.isUser, env.isProd) && boma()
