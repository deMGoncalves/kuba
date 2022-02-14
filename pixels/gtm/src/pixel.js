import h, { render } from '@kuba/h'
import * as f from '@kuba/f'
import agent from '@kuba/agent'
import env from '@kuba/env'
import { gtm } from '@kuba/settings'
import accepted from './accepted'
import dataLayer from './dataLayer'

f.and(agent.isUser, env.isProd, accepted) && (
  render(
    document.head,
    <script src={`https://www.googletagmanager.com/gtm.js?id=${gtm.id}`} async />
  ),

  dataLayer.push({
    'gtm.kuba': new Date().getTime(),
    event: 'gtm.js'
  })
)
