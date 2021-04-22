import h, { render } from '@kuba/h'
import * as f from '@kuba/f'
import agent from '@kuba/agent'
import env from '@kuba/env'
import gtag from './gtag'
import schema from './schema.json'

f.and(agent.isUser, env.isProd) && (
  gtag('js', new Date()),
  gtag('config', schema.id),
  render(document.head, <script src={`https://www.googletagmanager.com/gtag/js?id=${schema.id}`} async />)
)

export default gtag
