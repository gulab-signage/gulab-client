import * as Sentry from '@sentry/react';
import type { Breadcrumb } from '../../LoggerInterface';

export default function captureBreadcrumb(breadcrumb: Breadcrumb) {
  if (Sentry.getCurrentHub().getClient() !== undefined) {
    const { severity, message, data } = breadcrumb;
    Sentry.addBreadcrumb({
      message,
      data,
      level: severity,
    });
  }
}
