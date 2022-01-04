import * as E from 'fp-ts/lib/Eq'
import { pipe, unsafeCoerce } from 'fp-ts//lib/function'
import * as O from 'fp-ts/lib/Ord'

/**
 * Extension of `bigint`
 *
 * @since 0.0.1
 */

// -------------------------------------------------------------------------------------
// Type
// -------------------------------------------------------------------------------------

/** @since 0.0.1 */
export const URI = 'primitives-ts/JsBigInt'

// /**
//  * @since 0.0.1
//  * @category Type
//  */
// export type JsBigInt = bigint & { readonly JsBigInt: unique symbol }

// // -----------------------------------------------------------------------------
// Constants
// -----------------------------------------------------------------------------

/**
 * @since 0.0.1
 * @category Constants
 */
export const zero: bigint = unsafeCoerce(0)

/**
 * @since 0.0.1
 * @category Constants
 */
export const one: bigint = unsafeCoerce(1)

// -------------------------------------------------------------------------------------
// Instances
// -------------------------------------------------------------------------------------

/**
 * @since 0.0.1
 * @category Instances
 */
export const Eq: E.Eq<bigint> = E.eqStrict

/**
 * @since 0.0.1
 * @category Instances
 */
export const Ord: O.Ord<BigInt> = N.Ord
/**
 * @since 0.0.1
 * @category Instances
 */
export const Show: S.Show<JsNumber> = N.Show
