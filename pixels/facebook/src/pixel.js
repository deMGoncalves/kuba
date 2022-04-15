import * as f from '@kuba/f'
import agent from '@kuba/agent'
import env from '@kuba/env'
import fbq from './fbq'
import h, { render } from '@kuba/h'
import policy from '@kuba/policy'
import schema from './schema.json'

const events = f.idle(() => (
  fbq('init', schema.id),
  fbq('track', 'PageView')
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
