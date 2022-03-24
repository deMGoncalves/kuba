import * as f from '@kuba/f'
import h, { render } from '@kuba/h'
import accepted from './accepted'
import agent from '@kuba/agent'
import env from '@kuba/env'
import schema from './schema.json'

const settings = f.idle(() =>
  window._hjSettings = schema
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
  accepted) && (
  settings(),
  pixel()
)
