/**
 * Hexadecimal string numeral prefixed with '0x'
 *
 * @since 0.0.1
 */

import * as E from 'fp-ts/lib/Eq'
import { pipe } from 'fp-ts/lib/function'
import * as O from 'fp-ts/lib/Ord'
import { Refinement } from 'fp-ts/lib/Refinement'
import * as S from 'fp-ts/lib/Show'
import * as STR from 'fp-ts/lib/string'
import { make } from 'io-ts/Codec'
import * as DEC from 'io-ts/Decoder'
import * as ENC from 'io-ts/Encoder'
import { _encoder } from './utils'

// -------------------------------------------------------------------------------------
// Type
// -------------------------------------------------------------------------------------

/** @since 0.0.1 */
export const URI = 'primitives-ts/HexadecimalNumeral'

/**
 * @since 0.0.1
 * @category Type
 */

export type HexadecimalNumeral = string & {
  readonly HexadecimalNumeral: unique symbol
}

// -------------------------------------------------------------------------------------
// Instances
// -------------------------------------------------------------------------------------

/**
 * @since 0.0.1
 * @category Instances
 */
export const Eq: E.Eq<HexadecimalNumeral> = STR.Eq

/**
 * @since 0.0.1
 * @category Instances
 */
export const Ord: O.Ord<HexadecimalNumeral> = STR.Ord
/**
 * @since 0.0.1
 * @category Instances
 */
export const Show: S.Show<HexadecimalNumeral> = STR.Show

// -------------------------------------------------------------------------------------
// Refinements
// -------------------------------------------------------------------------------------

/**
 * @since 0.0.1
 * @category Refinements
 */
export const refine: Refinement<string, HexadecimalNumeral> = (
  a: string
): a is HexadecimalNumeral =>
  /^[+-]?(0x)[0-9a-fA-F]+((\.[0-9a-fA-F]+){1})?$/.test(a)

// -------------------------------------------------------------------------------------
// IO
// -------------------------------------------------------------------------------------

/**
 * @since 0.0.1
 * @category IO
 */
export const Decoder: DEC.Decoder<unknown, HexadecimalNumeral> = pipe(
  DEC.string,
  DEC.refine(refine, URI)
)

/**
 * @since 0.0.1
 * @category IO
 */
export const Encoder: ENC.Encoder<string, HexadecimalNumeral> = _encoder

/**
 * @since 0.0.1
 * @category IO
 */
export const Codec = make(Decoder, Encoder)
