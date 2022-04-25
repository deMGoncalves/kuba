import * as f from '@kuba/f'
import * as Sentry from '@sentry/browser'
import { BrowserTracing } from '@sentry/tracing'
import agent from '@kuba/agent'
import env from '@kuba/env'
import schema from './schema.json'

const pixel = () => (
  Sentry.init({
    dsn: schema.src,
    integrations: [new BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: schema.rate
  })
)

f.and(
  agent.isUser,
  env.isProd) && (
  pixel()
)
