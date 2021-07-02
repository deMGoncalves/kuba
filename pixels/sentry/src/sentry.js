import * as Sentry from "@sentry/browser";
import { Integrations } from "@sentry/tracing";
import schema from './schema.json'

export default () =>
  Sentry.init({
    dsn: schema.dsn,
    integrations: [new Integrations.BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  })
