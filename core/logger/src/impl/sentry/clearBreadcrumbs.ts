import * as Sentry from '@sentry/react';

export default function clearBreadcrumbs() {
  if (Sentry.getCurrentHub().getClient() !== undefined) {
    Sentry.configureScope((scope) => {
      scope.clearBreadcrumbs();
    });
  }
}
