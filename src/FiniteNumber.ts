/** @since 0.0.1 */
import { Branded } from 'io-ts'
import { Decoder, number, refine } from 'io-ts/Decoder'
import { Encoder } from 'io-ts/Encoder'
import { encodeAsUnderlying } from './utils'
import { make } from 'io-ts/Codec'
// -------------------------------------------------------------------------------------
// interface
// -------------------------------------------------------------------------------------

/**
 * Extension of `number` which filters `(-)Infinity` or `NaN`
 *
 * @since 0.0.1
 */
export type FiniteNumber = Branded<
  number,
  { readonly FiniteNumber: unique symbol }
>

// -------------------------------------------------------------------------------------
// IO
// -------------------------------------------------------------------------------------

/**
 * Decoder for `FiniteNumber`
 *
 * @since 0.0.1
 * @category IO
 */
export const decoder: Decoder<unknown, FiniteNumber> = refine(
  (a): a is FiniteNumber => Number.isFinite(a),
  'FiniteNumber'
)(number)

/** @ignore */
export const encoder: Encoder<number, FiniteNumber> = encodeAsUnderlying

/** @ignore */
export const codec = make(decoder, encoder)

// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
