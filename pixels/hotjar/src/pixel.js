import h, { render } from '@kuba/h'
import * as f from '@kuba/f'
import agent from '@kuba/agent'
import env from '@kuba/env'
import { hotjar } from '@kuba/settings'
import accepted from './accepted'

f.and(agent.isUser, env.isProd, accepted) && (
  window._hjSettings = hotjar,

  render(
    document.head,
    <script src={`https://static.hotjar.com/c/hotjar-${hotjar.hjid}.js?sv=6`} async />
  )
)
