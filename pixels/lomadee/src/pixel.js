import * as f from '@kuba/f'
import agent from '@kuba/agent'
import env from '@kuba/env'
import h, { render } from '@kuba/h'
import schema from './schema.json'

const pixel = f.idle(() =>
  render(
    document.head,
    <meta name='lomadee-verification' content={schema.code} />
  )
)

f.and(
  agent.isUser,
  env.isProd) && (
  pixel()
)
