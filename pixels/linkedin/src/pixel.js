import * as f from '@kuba/f'
import agent from '@kuba/agent'
import env from '@kuba/env'
import h, { render } from '@kuba/h'
import policy from '@kuba/policy'
import schema from './schema.json'

const pixel = f.idle(() => (
  render(
    document.head,
    <script src={schema.src} async />
  )
))

f.and(
  agent.isUser,
  env.isProd,
  policy.accepted) && (
  pixel()
)
