import h, { render } from '@rex/h'
import agent from '@rex/agent'
import gtag from './gtag'
import schema from './schema.json'

agent.isUser && (
  gtag('js', new Date()),
  gtag('config', schema.id),

  render(document.head, <script src={`https://www.googletagmanager.com/gtag/js?id=${schema.id}`} async />)
)

export default gtag
