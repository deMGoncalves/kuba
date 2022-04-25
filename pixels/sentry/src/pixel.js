import * as f from '@kuba/f'
import agent from '@kuba/agent'
import env from '@kuba/env'
import schema from './schema.json'

const pixel = async () => {
  const Sentry = await import('@sentry/browser' /* webpackChunkName: "sentry_browser" */)
  const { BrowserTracing } = await import('@sentry/tracing' /* webpackChunkName: "sentry_tracing" */)

  Sentry.init({
    dsn: schema.src,
    integrations: [new BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: schema.rate
  })
}

f.and(
  agent.isUser,
  env.isProd) && (
  pixel()
)
