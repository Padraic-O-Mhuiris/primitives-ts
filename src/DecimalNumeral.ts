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
import { _encoder } from './utils'

// -------------------------------------------------------------------------------------
// Type
// -------------------------------------------------------------------------------------

/** @since 0.0.1 */
export const URI = 'primitives-ts/DecimalNumeral'

/**
 * @since 0.0.1
 * @category Type
 */
export type DecimalNumeral = string & {
  readonly DecimalNumeral: unique symbol
}

// -------------------------------------------------------------------------------------
// Instances
// -------------------------------------------------------------------------------------

/**
 * @since 0.0.1
 * @category Instances
 */
export const Eq: E.Eq<DecimalNumeral> = STR.Eq

/**
 * @since 0.0.1
 * @category Instances
 */
export const Ord: O.Ord<DecimalNumeral> = STR.Ord

/**
 * @since 0.0.1
 * @category Instances
 */
export const Show: S.Show<DecimalNumeral> = STR.Show

// -------------------------------------------------------------------------------------
// Refinements
// -------------------------------------------------------------------------------------

/**
 * @since 0.0.1
 * @category Refinements
 */
export const isDecimalNumeral: Refinement<string, DecimalNumeral> = (
  a: string
): a is DecimalNumeral => /^[-+]?[0-9]+(\.?[0-9]+)?([eE][-+]?[0-9]+)?$/.test(a)

// -------------------------------------------------------------------------------------
// IO
// -------------------------------------------------------------------------------------

/**
 * @since 0.0.1
 * @category IO
 */
export const Decoder: DEC.Decoder<unknown, DecimalNumeral> = pipe(
  DEC.string,
  DEC.refine(isDecimalNumeral, URI)
)

/**
 * @since 0.0.1
 * @category IO
 */
export const Encoder: ENC.Encoder<string, DecimalNumeral> = _encoder

/**
 * @since 0.0.1
 * @category IO
 */
export const Codec = make(Decoder, Encoder)
