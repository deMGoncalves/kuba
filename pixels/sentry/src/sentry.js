import * as Sentry from "@sentry/browser";
import { Integrations } from "@sentry/tracing";
import schema from './schema.json'

export default () =>
  Sentry.init({
    dsn: schema.dsn,
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0
  })
