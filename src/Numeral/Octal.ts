/** @since 0.0.1 */

import * as E from 'fp-ts/Eq'
import { pipe } from 'fp-ts/lib/function'
import * as O from 'fp-ts/Ord'
import * as S from 'fp-ts/Show'
import { make } from 'io-ts/Codec'
import * as DEC from 'io-ts/Decoder'
import * as ENC from 'io-ts/Encoder'
import { _encoder } from '../utils'
import * as STR from 'fp-ts/string'

// -------------------------------------------------------------------------------------
// Type
// -------------------------------------------------------------------------------------

/**
 * Octal string numeral with prefix '0o'
 *
 * @since 0.0.1
 * @category Type
 */
export type Octal = string & {
  readonly Octal: unique symbol
}

// -------------------------------------------------------------------------------------
// Instances
// -------------------------------------------------------------------------------------

/**
 * @since 0.0.1
 * @category Instances
 */
export const Eq: E.Eq<Octal> = E.eqStrict

/**
 * @since 0.0.1
 * @category Instances
 */
export const Ord: O.Ord<Octal> = STR.Ord

/**
 * @since 0.0.1
 * @category Instances
 */
export const Show: S.Show<Octal> = STR.Show

// -------------------------------------------------------------------------------------
// IO
// -------------------------------------------------------------------------------------

/**
 * @since 0.0.1
 * @category IO
 */
export const Decoder: DEC.Decoder<unknown, Octal> = pipe(
  DEC.string,
  DEC.refine(
    (a): a is Octal => /^[+-]?(0o)[0-7]+((\.[0-7]+){1})?$/.test(a),
    'Octal'
  )
)

/**
 * @since 0.0.1
 * @category IO
 */
export const Encoder: ENC.Encoder<string, Octal> = _encoder

/**
 * @since 0.0.1
 * @category IO
 */
export const Codec = make(Decoder, Encoder)