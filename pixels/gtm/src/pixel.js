import h, { render } from '@kuba/h'
import * as f from '@kuba/f'
import agent from '@kuba/agent'
import env from '@kuba/env'
import dataLayer from './dataLayer'
import schema from './schema.json'

f.and(agent.isUser, env.isProd) && (
  dataLayer.push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js'
  }),
  render(document.head, <script src={`https://www.googletagmanager.com/gtm.js?id=${schema.id}`} async />)
)

export default dataLayer
