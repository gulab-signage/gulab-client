import * as Sentry from '@sentry/react';
import type { LoggerUser } from '../../LoggerInterface';

export default function setCurrentUser(user: LoggerUser | null) {
  if (Sentry.getCurrentHub().getClient() !== undefined) {
    Sentry.setUser(user);
  }
}
