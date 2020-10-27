import h, { render } from '@rex/h'
import agent from '@rex/agent'
import ga from './ga'
import schema from './schema.json'

agent.isUser && (
  ga('create', schema.id, 'auto'),
  ga('send', 'pageview'),

  render(document.head, <script src='https://www.google-analytics.com/analytics.js' async />)
)

export default ga
