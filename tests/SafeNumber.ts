import * as U from './utils'
import * as _ from '../src/SafeNumber'
import { isLeft, isRight } from 'fp-ts/lib/Either'

describe(_.URI, () => {
  it('Eq', () => {
    U.isTrue(_.Eq.equals(_.one, _.one))
    U.isFalse(_.Eq.equals(_.zero, _.one))
    U.isFalse(_.Eq.equals(_.one, _.zero))
  })

  it('Decoder', () => {
    const { decode } = _.Decoder
    U.isTrue(isRight(decode(1)))
    U.isTrue(isRight(decode(0)))
    U.isTrue(isRight(decode(-1)))

    U.isTrue(isRight(decode(Number.MAX_SAFE_INTEGER)))
    U.isTrue(isRight(decode(Number.MIN_SAFE_INTEGER)))

    U.isTrue(isLeft(decode(Number.MAX_SAFE_INTEGER + 1)))
    U.isTrue(isLeft(decode(Number.MIN_SAFE_INTEGER - 1)))

    U.isTrue(isLeft(decode(NaN)))
    U.isFalse(isRight(decode(NaN)))

    U.isTrue(isLeft(decode(Infinity)))
    U.isFalse(isRight(decode(Infinity)))

    U.isTrue(isLeft(decode(-Infinity)))
    U.isFalse(isRight(decode(-Infinity)))
  })

  it('Encoder', () => {
    const { encode } = _.Encoder

    U.isTrue(encode(_.one) === 1)
    U.isTrue(encode(_.zero) === 0)
  })
})
