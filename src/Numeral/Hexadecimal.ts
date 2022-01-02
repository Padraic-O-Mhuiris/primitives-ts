/**
 * Hexadecimal string numeral prefixed with '0x'
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
import { _encoder } from '../utils'
import * as STR from 'fp-ts/string'
import { Refinement } from 'fp-ts/Refinement'

// -------------------------------------------------------------------------------------
// Type
// -------------------------------------------------------------------------------------

/** @since 0.0.1 */
export const URI = 'primitives-ts/Numeral/Hexadecimal'

/**
 * @since 0.0.1
 * @category Type
 */

export type Hexadecimal = string & {
  readonly Hexadecimal: unique symbol
}

// -------------------------------------------------------------------------------------
// Instances
// -------------------------------------------------------------------------------------

/**
 * @since 0.0.1
 * @category Instances
 */
export const Eq: E.Eq<Hexadecimal> = STR.Eq

/**
 * @since 0.0.1
 * @category Instances
 */
export const Ord: O.Ord<Hexadecimal> = STR.Ord
/**
 * @since 0.0.1
 * @category Instances
 */
export const Show: S.Show<Hexadecimal> = STR.Show

// -------------------------------------------------------------------------------------
// Refinements
// -------------------------------------------------------------------------------------

/**
 * @since 0.0.1
 * @category Refinements
 */
export const isHexadecimal: Refinement<string, Hexadecimal> = (
  a: string
): a is Hexadecimal => /^[+-]?(0x)[0-9a-fA-F]+((\.[0-9a-fA-F]+){1})?$/.test(a)

// -------------------------------------------------------------------------------------
// IO
// -------------------------------------------------------------------------------------

/**
 * @since 0.0.1
 * @category IO
 */
export const Decoder: DEC.Decoder<unknown, Hexadecimal> = pipe(
  DEC.string,
  DEC.refine(isHexadecimal, URI)
)

/**
 * @since 0.0.1
 * @category IO
 */
export const Encoder: ENC.Encoder<string, Hexadecimal> = _encoder

/**
 * @since 0.0.1
 * @category IO
 */
export const Codec = make(Decoder, Encoder)
