import * as f from '@kuba/f'
import agent from '@kuba/agent'
import env from '@kuba/env'

const pixel = f.idle(() =>
  setInterval('debugger', 250)
)

f.equal(
  agent.isUser,
  env.isProd) && (
  pixel()
)
