import * as assert from 'assert'

export const deepStrictEqual = <A>(actual: A, expected: A): void => {
  assert.deepStrictEqual(actual, expected)
}

export const strictEqual = <A>(actual: A, expected: A): void => {
  assert.strictEqual(actual, expected)
}

export const isTrue = (predicateResult: boolean): void => {
  assert.equal(predicateResult, true)
}
export const isFalse = (predicateResult: boolean): void => {
  assert.equal(predicateResult, false)
}
