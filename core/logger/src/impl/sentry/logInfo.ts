import * as Sentry from '@sentry/react';
import type { LogOptions } from '../../LoggerInterface';

export default function logInfo(message: string, options?: LogOptions): string {
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
        eventId = Sentry.captureMessage(message);
      });
    } else {
      eventId = Sentry.captureMessage(message);
    }
  }

  console.info(`(${eventId})`, message);
  return eventId;
}
