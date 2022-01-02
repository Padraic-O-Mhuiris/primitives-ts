---
title: DecimalNumeral.ts
nav_order: 2
parent: Modules
---

## DecimalNumeral overview

Decimal string numeral including exponents

Added in v0.0.1

---

<h2 class="text-delta">Table of contents</h2>

- [IO](#io)
  - [Codec](#codec)
  - [Decoder](#decoder)
  - [Encoder](#encoder)
- [Instances](#instances)
  - [Eq](#eq)
  - [Ord](#ord)
  - [Show](#show)
- [Refinements](#refinements)
  - [isDecimalNumeral](#isdecimalnumeral)
- [Type](#type)
  - [DecimalNumeral (type alias)](#decimalnumeral-type-alias)
- [utils](#utils)
  - [URI](#uri)

---

# IO

## Codec

**Signature**

```ts
export declare const Codec: Codec<unknown, string, DecimalNumeral>
```

Added in v0.0.1

## Decoder

**Signature**

```ts
export declare const Decoder: DEC.Decoder<unknown, DecimalNumeral>
```

Added in v0.0.1

## Encoder

**Signature**

```ts
export declare const Encoder: ENC.Encoder<string, DecimalNumeral>
```

Added in v0.0.1

# Instances

## Eq

**Signature**

```ts
export declare const Eq: E.Eq<DecimalNumeral>
```

Added in v0.0.1

## Ord

**Signature**

```ts
export declare const Ord: O.Ord<DecimalNumeral>
```

Added in v0.0.1

## Show

**Signature**

```ts
export declare const Show: S.Show<DecimalNumeral>
```

Added in v0.0.1

# Refinements

## isDecimalNumeral

**Signature**

```ts
export declare const isDecimalNumeral: Refinement<string, DecimalNumeral>
```

Added in v0.0.1

# Type

## DecimalNumeral (type alias)

**Signature**

```ts
export type DecimalNumeral = string & {
  readonly DecimalNumeral: unique symbol
}
```

Added in v0.0.1

# utils

## URI

**Signature**

```ts
export declare const URI: 'primitives-ts/DecimalNumeral'
```

Added in v0.0.1
