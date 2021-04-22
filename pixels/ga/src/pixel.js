import h, { render } from '@kuba/h'
import * as f from '@kuba/f'
import agent from '@kuba/agent'
import env from '@kuba/env'
import ga from './ga'
import schema from './schema.json'

f.and(agent.isUser, env.isProd) && (
  ga('create', schema.id, 'auto'),
  ga('send', 'pageview'),
  render(document.head, <script src='https://www.google-analytics.com/analytics.js' async />)
)

export default ga
