import h, { render } from '@rex/h'
import agent from '@rex/agent'
import dataLayer from './dataLayer'
import schema from './schema.json'

agent.isUser && (
  dataLayer.push({
    'gtm.start': new Date().getTime(),
    'event': 'gtm.js'
  }),

  render(document.head, <script src={`https://www.googletagmanager.com/gtm.js?id=${schema.id}`} async />)
)

export default dataLayer
