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
 * Captures strings which represent decimal representations of numbers including exponents
 *
 * @since 0.0.1
 * @category Type
 */

export type DecimalString = string & {
  readonly DecimalString: unique symbol
}

// -------------------------------------------------------------------------------------
// Instances
// -------------------------------------------------------------------------------------

/**
 * @since 0.0.1
 * @category Instances
 */
export const Eq: E.Eq<DecimalString> = E.eqStrict

/**
 * @since 0.0.1
 * @category Instances
 */
export const Ord: O.Ord<DecimalString> = {
  equals: Eq.equals,
  compare: (x, y) => (x < y ? Ordering.LT : x > y ? Ordering.GT : Ordering.EQ),
}

/**
 * @since 0.0.1
 * @category Instances
 */
export const Show: S.Show<DecimalString> = {
  show: (a) => a,
}

// -------------------------------------------------------------------------------------
// IO
// -------------------------------------------------------------------------------------

/**
 * @since 0.0.1
 * @category IO
 */
export const Decoder: DEC.Decoder<unknown, DecimalString> = pipe(
  DEC.string,
  DEC.refine(
    (a): a is DecimalString =>
      /^[-+]?[0-9]+(\.?[0-9]+)?([eE][-+]?[0-9]+)?$/.test(a),
    'DecimalString'
  )
)

/**
 * @since 0.0.1
 * @category IO
 */
export const Encoder: ENC.Encoder<string, DecimalString> = _encoder

/**
 * @since 0.0.1
 * @category IO
 */
export const Codec = make(Decoder, Encoder)
