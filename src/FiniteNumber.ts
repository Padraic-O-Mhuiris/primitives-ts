/** @since 0.0.1 */
import { make } from 'io-ts/Codec'
import { Decoder, number, refine } from 'io-ts/Decoder'
import { Encoder } from 'io-ts/Encoder'
import { _encoder } from './utils'
// -------------------------------------------------------------------------------------
// interface
// -------------------------------------------------------------------------------------

/**
 * Extension of `number` which filters `(-)Infinity` or `NaN`
 *
 * @since 0.0.1
 * @category Type
 */
export type FiniteNumber = number & { readonly FiniteNumber: unique symbol }

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
export const encoder: Encoder<number, FiniteNumber> = _encoder

/** @ignore */
export const codec = make(decoder, encoder)

// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
