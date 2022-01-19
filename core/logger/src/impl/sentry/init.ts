import { AppEnv } from '@gulab-client/models';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import type { InitOptions } from '../../LoggerInterface';

export default function initialize(options: InitOptions) {
  Sentry.init({
    // If true, send stack trace with info messages
    attachStacktrace: false,
    dsn: process.env.SENTRY_DSN,
    enabled: process.env.APP_ENV !== AppEnv.Local,
    environment: process.env.APP_ENV,
    initialScope: {
      tags: options.tags,
      user: undefined,
    },
    integrations: [new Integrations.BrowserTracing()],
    maxBreadcrumbs: 50,
    sampleRate: 1,
    // TODO: Enable tracing as needed
    // tracesSampleRate: process.env.APP_ENV === AppEnv.Production ? 0.2 : 1,
  });
}
