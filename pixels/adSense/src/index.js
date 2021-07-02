import h, { render } from '@kuba/h'
import * as f from '@kuba/f'
import agent from '@kuba/agent'
import env from '@kuba/env'
import schema from './schema.json'

f.and(agent.isUser, env.isProd) && (
  render(document.head, <script data-ad-client={schema.adClient} src={schema.src} async />)
)
