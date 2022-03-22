import * as f from '@kuba/f'
import accepted from './accepted'
import agent from '@kuba/agent'
import env from '@kuba/env'
import h, { render } from '@kuba/h'
import schema from './schema.json'

const pixel = f.idle(() =>
  render(
    document.head,
    <script data-ad-client={schema.adClient} src={schema.src} async />
  )
)

f.and(
  agent.isUser,
  env.isProd,
  accepted) && (
  pixel()
)
