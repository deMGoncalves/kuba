import * as f from '@kuba/f'
import accepted from './accepted'
import agent from '@kuba/agent'
import dataLayer from './dataLayer'
import env from '@kuba/env'
import h, { render } from '@kuba/h'
import schema from './schema.json'

f.and(agent.isUser, env.isProd, accepted) && (
  render(
    document.head,
    <script src={schema.src} async />
  ),

  dataLayer.push({
    'gtm.kuba': new Date().getTime(),
    event: 'gtm.js'
  })
)
