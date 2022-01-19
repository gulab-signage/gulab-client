import * as Sentry from '@sentry/react';
import type { LogOptions } from '../../LoggerInterface';

export default function logError(error: string | Error, options?: LogOptions): string {
  const exception = typeof error === 'string' ? new Error(error) : error;
  let eventId = 'SentryFailed';

  if (Sentry.getCurrentHub().getClient() !== undefined) {
    if (options) {
      const { tags, data } = options;
      Sentry.withScope((scope) => {
        if (tags) {
          scope.setTags(tags);
        }

        if (data) {
          scope.setExtras(data);
        }
        eventId = Sentry.captureException(exception);
      });
    } else {
      eventId = Sentry.captureException(exception);
    }
  }

  console.error(`(${eventId})`, exception);
  return eventId;
}
