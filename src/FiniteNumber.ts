/** @since 0.0.1 */

import * as E from 'fp-ts/Eq'
import { unsafeCoerce } from 'fp-ts/lib/function'
import * as O from 'fp-ts/Ord'
import * as S from 'fp-ts/Show'
import { make } from 'io-ts/Codec'
import * as DEC from 'io-ts/Decoder'
import * as ENC from 'io-ts/Encoder'
import { Ordering, _encoder } from './utils'

// -------------------------------------------------------------------------------------
// Type
// -------------------------------------------------------------------------------------

/**
 * Extension of `number` which filters `(-)Infinity` or `NaN`
 *
 * @since 0.0.1
 * @category Type
 */
export type FiniteNumber = number & { readonly FiniteNumber: unique symbol }

// -------------------------------------------------------------------------------------
// Instances
// -------------------------------------------------------------------------------------

/**
 * @since 0.0.1
 * @category Instances
 */
export const Eq: E.Eq<FiniteNumber> = E.eqStrict

/**
 * @since 0.0.1
 * @category Instances
 */
export const Ord: O.Ord<FiniteNumber> = {
  equals: Eq.equals,
  compare: (x, y) => (x < y ? Ordering.LT : x > y ? Ordering.GT : Ordering.EQ),
}

/**
 * @since 0.0.1
 * @category Instances
 */
export const Show: S.Show<FiniteNumber> = {
  show: (a) => a.toString(),
}

// -----------------------------------------------------------------------------
// Constants
// -----------------------------------------------------------------------------

/**
 * @since 0.0.1
 * @category Constants
 */
export const zero: FiniteNumber = unsafeCoerce(0)

/**
 * @since 1.0.0
 * @category Constants
 */
export const one: FiniteNumber = unsafeCoerce(1)

// -------------------------------------------------------------------------------------
// IO
// -------------------------------------------------------------------------------------

/**
 * @since 0.0.1
 * @category IO
 */
export const Decoder: DEC.Decoder<unknown, FiniteNumber> = DEC.refine(
  (a): a is FiniteNumber => Number.isFinite(a),
  'FiniteNumber'
)(DEC.number)

/**
 * @since 0.0.1
 * @category IO
 */
export const Encoder: ENC.Encoder<number, FiniteNumber> = _encoder

/**
 * @since 0.0.1
 * @category IO
 */
export const Codec = make(Decoder, Encoder)
