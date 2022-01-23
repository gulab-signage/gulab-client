import { Logger } from '@gulab-client/logger';

/**
 * @class LocalStorage wrapper class for encapsulating common behaviours we want shared between instances.
 */
class LocalStorage {
  protected readonly key: string;

  /**
   * Creates an instance of LocalStorage.
   * @param {string} key - Key used for the local storage item.
   */
  public constructor(key: string) {
    this.key = key;
  }

  set(data: unknown) {
    try {
      const value = typeof data !== 'string' ? JSON.stringify(data) : data;
      localStorage.setItem(this.key, value);
    } catch (error) {
      Logger.logError(error as Error);
      // TODO: The original error needs to be logged as well.
      // Logger.logError(`Error on LocalStorage.set for key ${this.key}.`);
    }
  }

  get<T>(): T | null {
    const value = localStorage.getItem(this.key);

    if (value !== null) {
      try {
        return JSON.parse(value) as T;
      } catch (error) {
        // No need to log or handle this error.
        // We know it will fail for string and we handle it below.
      }
    }

    return value as unknown as T;
  }

  remove() {
    localStorage.removeItem(this.key);
  }
}

export default LocalStorage;
