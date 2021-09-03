import h, { render } from '@kuba/h'
import * as f from '@kuba/f'
import agent from '@kuba/agent'
import env from '@kuba/env'
import schema from './schema.json'

f.and(agent.isUser, env.isProd) && (
  render(document.head, <script {...schema} async />),
  document
    .addEventListener('DOMContentLoaded', () =>
      Sentry.init({
        dsn: schema.dsn,
        release: `${__settings.app.name}@${__settings.app.release}`,
        integrations: [new Sentry.Integrations.BrowserTracing()],
        tracesSampleRate: 1.0,
      })
    )
)
