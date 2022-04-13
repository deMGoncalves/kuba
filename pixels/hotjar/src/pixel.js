import * as f from '@kuba/f'
import h, { render } from '@kuba/h'
import agent from '@kuba/agent'
import env from '@kuba/env'
import policy from '@kuba/policy'
import schema from './schema.json'

const settings = f.idle(() =>
  (window._hjSettings = schema)
)

const pixel = f.idle(() =>
  render(
    document.head,
    <script src={schema.src} async />
  )
)

f.and(
  agent.isUser,
  env.isProd,
  policy.accepted) && (
  settings(),
  pixel()
)
