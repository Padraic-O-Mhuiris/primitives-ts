/**
 * A `Numeral` is a string that represents a numerical quantity.
 *
 * Currently the `Numeral` type supports
 *
 * - Decimals no prefix
 * - Hexadecimal 0x prefix
 * - Octal 0o prefix
 * - Binary 0b prefix
 *
 * Prefixes are necessary to discern between different numeral types
 *
 * @since 0.0.1
 */

// -------------------------------------------------------------------------------------
// Type
// -------------------------------------------------------------------------------------

/**
 * The `Numeral` type
 *
 * @since 0.0.1
 * @category Type
 */
export type Numeral = string & { readonly Numeral: unique symbol }
