/**
 * Some idiots assigned `headers` as type `Record<string, string>` in axios type definitions.
 * This does not allow us to extend it globally.
 * Keeping the file in hopes of a brighter future.
 */

// declare module 'axios' {
//   interface AxiosRequestConfig {
//     headers?: {
//       AuditMessage?: string;
//     };
//   }
// }

export {};
