/**
 * Binary string numeral with prefix '0b'
 *
 * @since 0.0.1
 */

import * as E from 'fp-ts/Eq'
import { pipe } from 'fp-ts/lib/function'
import * as O from 'fp-ts/Ord'
import * as S from 'fp-ts/Show'
import { make } from 'io-ts/Codec'
import * as DEC from 'io-ts/Decoder'
import * as ENC from 'io-ts/Encoder'
import { _encoder } from './utils'
import * as STR from 'fp-ts/string'
import { Refinement } from 'fp-ts/Refinement'

// -------------------------------------------------------------------------------------
// Type
// -------------------------------------------------------------------------------------

/** @since 0.0.1 */
export const URI = 'primitives-ts/BinaryNumeral'

/**
 * @since 0.0.1
 * @category Type
 */
export type BinaryNumeral = string & {
  readonly BinaryNumeral: unique symbol
}

// -------------------------------------------------------------------------------------
// Instances
// -------------------------------------------------------------------------------------

/**
 * @since 0.0.1
 * @category Instances
 */
export const Eq: E.Eq<BinaryNumeral> = E.eqStrict

/**
 * @since 0.0.1
 * @category Instances
 */
export const Ord: O.Ord<BinaryNumeral> = STR.Ord

/**
 * @since 0.0.1
 * @category Instances
 */
export const Show: S.Show<BinaryNumeral> = STR.Show

// -------------------------------------------------------------------------------------
// Refinements
// -------------------------------------------------------------------------------------

/**
 * @since 0.0.1
 * @category Refinements
 */
export const isBinaryNumeral: Refinement<string, BinaryNumeral> = (
  a: string
): a is BinaryNumeral => /^[+-]?(0b)[0-1]+((\.[0-1]+){1})?$/.test(a)

// -------------------------------------------------------------------------------------
// IO
// -------------------------------------------------------------------------------------

/**
 * @since 0.0.1
 * @category IO
 */
export const Decoder: DEC.Decoder<unknown, BinaryNumeral> = pipe(
  DEC.string,
  DEC.refine(isBinaryNumeral, URI)
)

/**
 * @since 0.0.1
 * @category IO
 */
export const Encoder: ENC.Encoder<string, BinaryNumeral> = _encoder

/**
 * @since 0.0.1
 * @category IO
 */
export const Codec = make(Decoder, Encoder)
