import h, { render } from '@kuba/h'
import * as f from '@kuba/f'
import agent from '@kuba/agent'
import env from '@kuba/env'
import hj from './hj'
import schema from './schema.json'

f.and(agent.isUser, env.isProd) && (
  window._hjSettings = schema,
  render(document.head, <script src={schema.src} async />)
)

export default hj
