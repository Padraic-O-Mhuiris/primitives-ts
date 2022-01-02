/**
 * Extension of `number` which filters `(-)Infinity` or `NaN` and is within
 * bounds of MAX_SAFE_INTEGER and MIN_SAFE_INTEGER
 *
 * @since 0.0.1
 */

import * as E from 'fp-ts/Eq'
import { pipe, unsafeCoerce } from 'fp-ts/lib/function'
import * as N from 'fp-ts/number'
import * as O from 'fp-ts/Ord'
import * as S from 'fp-ts/Show'
import { make } from 'io-ts/Codec'
import * as DEC from 'io-ts/Decoder'
import * as ENC from 'io-ts/Encoder'
import { Refinement } from 'fp-ts/Refinement'
import { _encoder } from './utils'
import * as B from 'fp-ts/Bounded'

// -------------------------------------------------------------------------------------
// Type
// -------------------------------------------------------------------------------------

/** @since 0.0.1 */
export const URI = 'primitives-ts/SafeNumber'

/**
 * @since 0.0.1
 * @category Type
 */
export type SafeNumber = number & { readonly SafeNumber: unique symbol }

// -----------------------------------------------------------------------------
// Constants
// -----------------------------------------------------------------------------

/**
 * @since 0.0.1
 * @category Constants
 */
export const zero: SafeNumber = unsafeCoerce(0)

/**
 * @since 1.0.0
 * @category Constants
 */
export const one: SafeNumber = unsafeCoerce(1)

/**
 * @since 0.0.1
 * @category Constants
 */
export const max: SafeNumber = unsafeCoerce(Number.MAX_SAFE_INTEGER)

/**
 * @since 0.0.1
 * @category Constants
 */
export const min: SafeNumber = unsafeCoerce(Number.MIN_SAFE_INTEGER)

// -------------------------------------------------------------------------------------
// Instances
// -------------------------------------------------------------------------------------

/**
 * @since 0.0.1
 * @category Instances
 */
export const Eq: E.Eq<SafeNumber> = N.Eq

/**
 * @since 0.0.1
 * @category Instances
 */
export const Ord: O.Ord<SafeNumber> = N.Ord
/**
 * @since 0.0.1
 * @category Instances
 */
export const Show: S.Show<SafeNumber> = N.Show

/**
 * @since 0.0.1
 * @category Instances
 */
export const Bounded: B.Bounded<SafeNumber> = {
  equals: Eq.equals,
  compare: Ord.compare,
  top: max,
  bottom: min,
}

// -------------------------------------------------------------------------------------
// Refinements
// -------------------------------------------------------------------------------------

/**
 * @since 0.0.1
 * @category Refinements
 */
export const isSafeNumber: Refinement<number, SafeNumber> = (
  u: number
): u is SafeNumber => Number.isFinite(u)

// -------------------------------------------------------------------------------------
// IO
// -------------------------------------------------------------------------------------

/**
 * @since 0.0.1
 * @category IO
 */
export const Decoder: DEC.Decoder<unknown, SafeNumber> = pipe(
  DEC.number,
  DEC.refine(isSafeNumber, URI)
)

/**
 * @since 0.0.1
 * @category IO
 */
export const Encoder: ENC.Encoder<number, SafeNumber> = _encoder

/**
 * @since 0.0.1
 * @category IO
 */
export const Codec = make(Decoder, Encoder)
