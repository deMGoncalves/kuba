import h, { render } from '@kuba/h'
import * as f from '@kuba/f'
import agent from '@kuba/agent'
import env from '@kuba/env'
import { adSense } from '@kuba/settings'
import accepted from './accepted'

f.and(agent.isUser, env.isProd, accepted) && (
  render(
    document.head,
    <script data-ad-client={adSense.adClient} src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js' async />
  )
)
