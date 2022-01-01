/** @since 0.0.1 */

import { unsafeCoerce } from 'fp-ts/lib/function'

/**
 * Convenience function for simple construction of `Encoder<A, B>` for branded types
 *
 * @since 0.0.1
 */
export const _encoder = { encode: unsafeCoerce }

/**
 * More Haskellish definition of order values
 *
 * @since 0.0.1
 */
export enum Ordering {
  LT = -1,
  EQ = 0,
  GT = 1,
}
