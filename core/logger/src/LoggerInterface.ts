import Severity from './types/Severity';

export type InitOptions = {
  tags: Record<string, string | number | undefined> & { 'app.name': string };
};

export type LogOptions = {
  tags?: Record<string, string | number | undefined>;
  data?: Record<string, unknown>;
};

export type LoggerUser = {
  id?: string;
  username?: string;
  roles?: string[];
};

export type Breadcrumb = {
  message: string;
  severity?: Severity;
  data?: Record<string, unknown>;
};

export interface LoggerInterface {
  /**
   * Create a trail of events that happened prior to an issue.
   * Add breadcrumb to the current scope.
   * @param {Breadcrumb} breadcrumb - Breadcrumb
   */
  captureBreadcrumb(breadcrumb: Breadcrumb): void;

  /**
   * Clears all currently set Breadcrumbs.
   */
  clearBreadcrumbs(): void;

  /**
   * Initializes the logger.
   * @param {InitOptions} options - Must specify at least app.name tag.
   */
  init(options: InitOptions): void;

  /**
   * Captures an exception event sends, it to Sentry and logs to console.
   * @param {string | Error} exception - A string or exception-like object.
   * @param {LogOptions} options - Object to merge with the current scope. Only for this event.
   * @returns The default or generated eventId.
   */
  logError(error: string | Error, options?: LogOptions): string;

  /**
   * Captures a message event, sends it to Sentry and logs to console.
   * @param {string} message - The message to send to Sentry.
   * @param {LogOptions} options - Object to merge with the current scope. Only for this event.
   * @returns The default or generated eventId.
   */
  logInfo(message: string, options?: LogOptions): string;

  /**
   * Updates user context information for future events.
   * @param {LoggerUser} user - User object that will be merged with the current context. Pass `null` to unset the user.
   */
  setCurrentUser(user: LoggerUser): void;
}
