export {};

declare global {
  interface Window {
    appInfo?: Record<string, string>;
  }
}
