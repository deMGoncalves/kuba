import h, { Fragment, render } from '@kuba/h'
import * as f from '@kuba/f'
import agent from '@kuba/agent'
import env from '@kuba/env'
import * as settings from '@kuba/settings'

f.and(agent.isUser, env.isProd) && (
  render(
    document.head,
    <>
      <meta name='adopt-website-id' content={settings.adOpt.code} />
      <script src={`//tag.goadopt.io/injector.js?website_code=${settings.adOpt.code}`} class='adopt-injector' />
    </>
  )
)
