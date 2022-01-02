---
title: Hexadecimal.ts
nav_order: 3
parent: Modules
---

## Hexadecimal overview

Hexadecimal string numeral prefixed with '0x'

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
  - [isHexadecimalNumeral](#ishexadecimalnumeral)
- [Type](#type)
  - [HexadecimalNumeral (type alias)](#hexadecimalnumeral-type-alias)
- [utils](#utils)
  - [URI](#uri)

---

# IO

## Codec

**Signature**

```ts
export declare const Codec: Codec<unknown, string, HexadecimalNumeral>
```

Added in v0.0.1

## Decoder

**Signature**

```ts
export declare const Decoder: DEC.Decoder<unknown, HexadecimalNumeral>
```

Added in v0.0.1

## Encoder

**Signature**

```ts
export declare const Encoder: ENC.Encoder<string, HexadecimalNumeral>
```

Added in v0.0.1

# Instances

## Eq

**Signature**

```ts
export declare const Eq: E.Eq<HexadecimalNumeral>
```

Added in v0.0.1

## Ord

**Signature**

```ts
export declare const Ord: O.Ord<HexadecimalNumeral>
```

Added in v0.0.1

## Show

**Signature**

```ts
export declare const Show: S.Show<HexadecimalNumeral>
```

Added in v0.0.1

# Refinements

## isHexadecimalNumeral

**Signature**

```ts
export declare const isHexadecimalNumeral: Refinement<string, HexadecimalNumeral>
```

Added in v0.0.1

# Type

## HexadecimalNumeral (type alias)

**Signature**

```ts
export type HexadecimalNumeral = string & {
  readonly HexadecimalNumeral: unique symbol
}
```

Added in v0.0.1

# utils

## URI

**Signature**

```ts
export declare const URI: 'primitives-ts/HexadecimalNumeral'
```

Added in v0.0.1
