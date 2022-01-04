/**
 * Extension of `number` which filters `(-)Infinity` or `NaN` and is within
 * bounds of MAX_SAFE_INTEGER and MIN_SAFE_INTEGER
 *
 * @since 0.0.1
 */

import { pipe, unsafeCoerce } from 'fp-ts//lib/function'
import * as B from 'fp-ts/lib/Bounded'
import { fromPredicate, chain, Either } from 'fp-ts/lib/Either'
import * as E from 'fp-ts/lib/Eq'
import * as N from 'fp-ts/lib/number'
import * as O from 'fp-ts/lib/Ord'
import { and, Refinement, compose } from 'fp-ts/lib/Refinement'
import * as S from 'fp-ts/lib/Show'
import { make } from 'io-ts/Codec'
import * as DEC from 'io-ts/Decoder'
import * as ENC from 'io-ts/Encoder'
import { _encoder } from './utils'

// -------------------------------------------------------------------------------------
// Type
// -------------------------------------------------------------------------------------

/** @since 0.0.1 */
export const URI = 'primitives-ts/JsNumber'

/**
 * @since 0.0.1
 * @category Type
 */
export type JsNumber = number & { readonly JsNumber: unique symbol }

// -----------------------------------------------------------------------------
// Constants
// -----------------------------------------------------------------------------

/**
 * @since 0.0.1
 * @category Constants
 */
export const zero: JsNumber = unsafeCoerce(0)

/**
 * @since 0.0.1
 * @category Constants
 */
export const one: JsNumber = unsafeCoerce(1)

// -------------------------------------------------------------------------------------
// Instances
// -------------------------------------------------------------------------------------

/**
 * @since 0.0.1
 * @category Instances
 */
export const Eq: E.Eq<JsNumber> = N.Eq

/**
 * @since 0.0.1
 * @category Instances
 */
export const Ord: O.Ord<JsNumber> = N.Ord
/**
 * @since 0.0.1
 * @category Instances
 */
export const Show: S.Show<JsNumber> = N.Show

/**
 * @since 0.0.1
 * @category Instances
 */
export const Bounded: B.Bounded<JsNumber> = {
  equals: Eq.equals,
  compare: Ord.compare,
  top: unsafeCoerce(Number.MAX_SAFE_INTEGER),
  bottom: unsafeCoerce(Number.MIN_SAFE_INTEGER),
}

// -------------------------------------------------------------------------------------
// Refinements
// -------------------------------------------------------------------------------------

export const isFinite: Refinement<unknown, number> = (u): u is number =>
  Number.isFinite(u)

export const isWithinBounds: Refinement<number, number> = (u): u is number =>
  u >= Bounded.bottom && u <= Bounded.top

// /** @since 0.0.1 */
// export const isFiniteNumber: Predicate<number> = (a) => Number.isFinite(a)

// /** @since 0.0.1 */
// export const isValidRange: Predicate<number> = (a) =>
//   a >= Bounded.bottom && a <= Bounded.top

/**
 * @since 0.0.1
 * @category Refinements
 */
export const refine: Refinement<unknown, JsNumber> = (u): u is JsNumber =>
  compose(isWithinBounds)(isFinite)(u)

//const x = compose(refineToValidRange)(refineToFiniteNumber)
// and(isFiniteNumber)(isValidRange)(u)

// -------------------------------------------------------------------------------------
// Pipeables
// -------------------------------------------------------------------------------------

/**
 * @since 0.0.1
 * @category Pipeables
 */
export const add =
  (a: JsNumber) =>
  (b: JsNumber): JsNumber =>
    unsafeCoerce(a + b)

export const safeAdd = (a: JsNumber) => (b: JsNumber) =>
  pipe(
    a + b,
    fromPredicate(refine, () => 'invalid')
  )

/**
 * @since 0.0.1
 * @category Pipeables
 */
export const sub =
  (a: JsNumber) =>
  (b: JsNumber): JsNumber =>
    unsafeCoerce(a - b)

export const safeSub = (a: JsNumber) => (b: JsNumber) =>
  pipe(
    a - b,
    fromPredicate(refine, () => 'invalid')
  )

/**
 * @since 0.0.1
 * @category Pipeables
 */
export const mul =
  (a: JsNumber) =>
  (b: JsNumber): JsNumber =>
    unsafeCoerce(a * b)

export const safeMul = (a: JsNumber) => (b: JsNumber) =>
  pipe(
    a * b,
    fromPredicate(refine, () => 'invalid')
  )

/**
 * @since 0.0.1
 * @category Pipeables
 */
export const div =
  (a: JsNumber) =>
  (b: JsNumber): JsNumber =>
    unsafeCoerce(a / b)

// -------------------------------------------------------------------------------------
// IO
// -------------------------------------------------------------------------------------

/**
 * @since 0.0.1
 * @category IO
 */
export const Decoder: DEC.Decoder<unknown, JsNumber> = pipe(
  DEC.number,
  DEC.refine(refine, URI)
)

/**
 * @since 0.0.1
 * @category IO
 */
export const Encoder: ENC.Encoder<number, JsNumber> = _encoder

/**
 * @since 0.0.1
 * @category IO
 */
export const Codec = make(Decoder, Encoder)
