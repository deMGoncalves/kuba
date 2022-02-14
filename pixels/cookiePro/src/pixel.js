import h, { Fragment, render } from '@kuba/h'
import * as f from '@kuba/f'
import agent from '@kuba/agent'
import env from '@kuba/env'
import * as settings from '@kuba/settings'

f.and(agent.isUser, env.isProd) && (
  render(
    document.head,
    <script src='https://cookie-cdn.cookiepro.com/scripttemplates/otSDKStub.js' data-domain-script={settings.cookiePro.domain} />
  )
)
