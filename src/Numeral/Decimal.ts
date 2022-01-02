/**
 * Decimal string numeral including exponents
 *
 * @since 0.0.1
 */

import * as E from 'fp-ts/Eq'
import { pipe } from 'fp-ts/lib/function'
import * as O from 'fp-ts/Ord'
import { Refinement } from 'fp-ts/Refinement'
import * as S from 'fp-ts/Show'
import * as STR from 'fp-ts/string'
import { make } from 'io-ts/Codec'
import * as DEC from 'io-ts/Decoder'
import * as ENC from 'io-ts/Encoder'
import { _encoder } from '../utils'

// -------------------------------------------------------------------------------------
// Type
// -------------------------------------------------------------------------------------

/** @since 0.0.1 */
const URI = 'primitives-ts/Numeral/Decimal'

/**
 * @since 0.0.1
 * @category Type
 */
export type Decimal = string & {
  readonly Decimal: unique symbol
}

// -------------------------------------------------------------------------------------
// Instances
// -------------------------------------------------------------------------------------

/**
 * @since 0.0.1
 * @category Instances
 */
export const Eq: E.Eq<Decimal> = STR.Eq

/**
 * @since 0.0.1
 * @category Instances
 */
export const Ord: O.Ord<Decimal> = STR.Ord

/**
 * @since 0.0.1
 * @category Instances
 */
export const Show: S.Show<Decimal> = STR.Show

// -------------------------------------------------------------------------------------
// Refinements
// -------------------------------------------------------------------------------------

/**
 * @since 0.0.1
 * @category Refinements
 */
export const isDecimal: Refinement<string, Decimal> = (
  a: string
): a is Decimal => /^[-+]?[0-9]+(\.?[0-9]+)?([eE][-+]?[0-9]+)?$/.test(a)

// -------------------------------------------------------------------------------------
// IO
// -------------------------------------------------------------------------------------

/**
 * @since 0.0.1
 * @category IO
 */
export const Decoder: DEC.Decoder<unknown, Decimal> = pipe(
  DEC.string,
  DEC.refine(isDecimal, URI)
)

/**
 * @since 0.0.1
 * @category IO
 */
export const Encoder: ENC.Encoder<string, Decimal> = _encoder

/**
 * @since 0.0.1
 * @category IO
 */
export const Codec = make(Decoder, Encoder)
