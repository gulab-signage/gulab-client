/**
 * Merge the two types and replace any keys of T1 that are repeated in T2.
 */
export type Override<T1, T2> = Omit<T1, keyof T2> & T2;
