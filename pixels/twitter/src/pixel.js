import * as f from '@kuba/f'
import agent from '@kuba/agent'
import env from '@kuba/env'
import h, { render } from '@kuba/h'
import policy from '@kuba/policy'
import schema from './schema.json'
import twq from './twq'

const events = f.idle(() => (
  twq('init', schema.id),
  twq('track', 'PageView')
))

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
  pixel(),
  events()
)
