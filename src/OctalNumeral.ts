/**
 * Octal string numeral with prefix '0o'
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
export const URI = 'primitives-ts/OctalNumeral'

/**
 * @since 0.0.1
 * @category Type
 */
export type OctalNumeral = string & {
  readonly OctalNumeral: unique symbol
}

// -------------------------------------------------------------------------------------
// Instances
// -------------------------------------------------------------------------------------

/**
 * @since 0.0.1
 * @category Instances
 */
export const Eq: E.Eq<OctalNumeral> = E.eqStrict

/**
 * @since 0.0.1
 * @category Instances
 */
export const Ord: O.Ord<OctalNumeral> = STR.Ord

/**
 * @since 0.0.1
 * @category Instances
 */
export const Show: S.Show<OctalNumeral> = STR.Show

// -------------------------------------------------------------------------------------
// Refinements
// -------------------------------------------------------------------------------------

/**
 * @since 0.0.1
 * @category Refinements
 */
export const isOctalNumeral: Refinement<string, OctalNumeral> = (
  a: string
): a is OctalNumeral => /^[+-]?(0o)[0-7]+((\.[0-7]+){1})?$/.test(a)

// -------------------------------------------------------------------------------------
// IO
// -------------------------------------------------------------------------------------

/**
 * @since 0.0.1
 * @category IO
 */
export const Decoder: DEC.Decoder<unknown, OctalNumeral> = pipe(
  DEC.string,
  DEC.refine(isOctalNumeral, URI)
)

/**
 * @since 0.0.1
 * @category IO
 */
export const Encoder: ENC.Encoder<string, OctalNumeral> = _encoder

/**
 * @since 0.0.1
 * @category IO
 */
export const Codec = make(Decoder, Encoder)
