---
title: BinaryNumeral.ts
nav_order: 1
parent: Modules
---

## BinaryNumeral overview

Binary string numeral with prefix '0b'

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
  - [isBinaryNumeral](#isbinarynumeral)
- [Type](#type)
  - [BinaryNumeral (type alias)](#binarynumeral-type-alias)
- [utils](#utils)
  - [URI](#uri)

---

# IO

## Codec

**Signature**

```ts
export declare const Codec: Codec<unknown, string, BinaryNumeral>
```

Added in v0.0.1

## Decoder

**Signature**

```ts
export declare const Decoder: DEC.Decoder<unknown, BinaryNumeral>
```

Added in v0.0.1

## Encoder

**Signature**

```ts
export declare const Encoder: ENC.Encoder<string, BinaryNumeral>
```

Added in v0.0.1

# Instances

## Eq

**Signature**

```ts
export declare const Eq: E.Eq<BinaryNumeral>
```

Added in v0.0.1

## Ord

**Signature**

```ts
export declare const Ord: O.Ord<BinaryNumeral>
```

Added in v0.0.1

## Show

**Signature**

```ts
export declare const Show: S.Show<BinaryNumeral>
```

Added in v0.0.1

# Refinements

## isBinaryNumeral

**Signature**

```ts
export declare const isBinaryNumeral: Refinement<string, BinaryNumeral>
```

Added in v0.0.1

# Type

## BinaryNumeral (type alias)

**Signature**

```ts
export type BinaryNumeral = string & {
  readonly BinaryNumeral: unique symbol
}
```

Added in v0.0.1

# utils

## URI

**Signature**

```ts
export declare const URI: 'primitives-ts/BinaryNumeral'
```

Added in v0.0.1
