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
import { _encoder } from '../utils'
import * as STR from 'fp-ts/string'
import { Refinement } from 'fp-ts/Refinement'

// -------------------------------------------------------------------------------------
// Type
// -------------------------------------------------------------------------------------

/** @since 0.0.1 */
const URI = 'primitives-ts/Numeral/Binary'

/**
 * @since 0.0.1
 * @category Type
 */
export type Binary = string & {
  readonly Binary: unique symbol
}

// -------------------------------------------------------------------------------------
// Instances
// -------------------------------------------------------------------------------------

/**
 * @since 0.0.1
 * @category Instances
 */
export const Eq: E.Eq<Binary> = E.eqStrict

/**
 * @since 0.0.1
 * @category Instances
 */
export const Ord: O.Ord<Binary> = STR.Ord

/**
 * @since 0.0.1
 * @category Instances
 */
export const Show: S.Show<Binary> = STR.Show

// -------------------------------------------------------------------------------------
// Refinements
// -------------------------------------------------------------------------------------

/**
 * @since 0.0.1
 * @category Refinements
 */
export const isBinary: Refinement<string, Binary> = (a: string): a is Binary =>
  /^[+-]?(0b)[0-1]+((\.[0-1]+){1})?$/.test(a)

// -------------------------------------------------------------------------------------
// IO
// -------------------------------------------------------------------------------------

/**
 * @since 0.0.1
 * @category IO
 */
export const Decoder: DEC.Decoder<unknown, Binary> = pipe(
  DEC.string,
  DEC.refine(isBinary, URI)
)

/**
 * @since 0.0.1
 * @category IO
 */
export const Encoder: ENC.Encoder<string, Binary> = _encoder

/**
 * @since 0.0.1
 * @category IO
 */
export const Codec = make(Decoder, Encoder)
