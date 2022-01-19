import { captureBreadcrumb, clearBreadcrumbs, init, logError, logInfo, setCurrentUser } from './impl/sentry';
import type { LoggerInterface } from './LoggerInterface';

const Logger: LoggerInterface = {
  captureBreadcrumb,
  clearBreadcrumbs,
  init,
  logError,
  logInfo,
  setCurrentUser,
};

export default Logger;
