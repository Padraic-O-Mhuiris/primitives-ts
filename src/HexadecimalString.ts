/** @since 0.0.1 */

import * as E from 'fp-ts/Eq'
import { pipe } from 'fp-ts/lib/function'
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
 * Captures strings which represent hexadecimal representations of numbers
 *
 * @since 0.0.1
 * @category Type
 */

export type HexadecimalString = string & {
  readonly HexadecimalString: unique symbol
}

// -------------------------------------------------------------------------------------
// Instances
// -------------------------------------------------------------------------------------

/**
 * @since 0.0.1
 * @category Instances
 */
export const Eq: E.Eq<HexadecimalString> = E.eqStrict

/**
 * @since 0.0.1
 * @category Instances
 */
export const Ord: O.Ord<HexadecimalString> = {
  equals: Eq.equals,
  compare: (x, y) => (x < y ? Ordering.LT : x > y ? Ordering.GT : Ordering.EQ),
}

/**
 * @since 0.0.1
 * @category Instances
 */
export const Show: S.Show<HexadecimalString> = {
  show: (a) => a,
}

// -------------------------------------------------------------------------------------
// IO
// -------------------------------------------------------------------------------------

/**
 * @since 0.0.1
 * @category IO
 */
export const Decoder: DEC.Decoder<unknown, HexadecimalString> = pipe(
  DEC.string,
  DEC.refine(
    (a): a is HexadecimalString =>
      /^[+-]?(0x)[0-9a-fA-F]+((\.[0-9a-fA-F]+){1})?$/.test(a),
    'HexadecimalString'
  )
)

/**
 * @since 0.0.1
 * @category IO
 */
export const Encoder: ENC.Encoder<string, HexadecimalString> = _encoder

/**
 * @since 0.0.1
 * @category IO
 */
export const Codec = make(Decoder, Encoder)
