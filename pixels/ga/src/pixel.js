import h, { render } from '@kuba/h'
import * as f from '@kuba/f'
import agent from '@kuba/agent'
import env from '@kuba/env'
import ga from './ga'
import schema from './schema.json'

f.and(agent.isUser, env.isProd) && (
  render(document.head, <script src={schema.src} async />),
  ga('create', schema.id, 'auto'),
  ga('send', 'pageview')
)
