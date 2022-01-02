---
title: SafeNumber.ts
nav_order: 6
parent: Modules
---

## SafeNumber overview

Extension of `number` which filters `(-)Infinity` or `NaN` and is within
bounds of MAX_SAFE_INTEGER and MIN_SAFE_INTEGER

Added in v0.0.1

---

<h2 class="text-delta">Table of contents</h2>

- [Constants](#constants)
  - [max](#max)
  - [min](#min)
  - [one](#one)
  - [zero](#zero)
- [IO](#io)
  - [Codec](#codec)
  - [Decoder](#decoder)
  - [Encoder](#encoder)
- [Instances](#instances)
  - [Bounded](#bounded)
  - [Eq](#eq)
  - [Ord](#ord)
  - [Show](#show)
- [Refinements](#refinements)
  - [isSafeNumber](#issafenumber)
- [Type](#type)
  - [SafeNumber (type alias)](#safenumber-type-alias)
- [utils](#utils)
  - [URI](#uri)

---

# Constants

## max

**Signature**

```ts
export declare const max: SafeNumber
```

Added in v0.0.1

## min

**Signature**

```ts
export declare const min: SafeNumber
```

Added in v0.0.1

## one

**Signature**

```ts
export declare const one: SafeNumber
```

Added in v1.0.0

## zero

**Signature**

```ts
export declare const zero: SafeNumber
```

Added in v0.0.1

# IO

## Codec

**Signature**

```ts
export declare const Codec: Codec<unknown, number, SafeNumber>
```

Added in v0.0.1

## Decoder

**Signature**

```ts
export declare const Decoder: DEC.Decoder<unknown, SafeNumber>
```

Added in v0.0.1

## Encoder

**Signature**

```ts
export declare const Encoder: ENC.Encoder<number, SafeNumber>
```

Added in v0.0.1

# Instances

## Bounded

**Signature**

```ts
export declare const Bounded: B.Bounded<SafeNumber>
```

Added in v0.0.1

## Eq

**Signature**

```ts
export declare const Eq: E.Eq<SafeNumber>
```

Added in v0.0.1

## Ord

**Signature**

```ts
export declare const Ord: O.Ord<SafeNumber>
```

Added in v0.0.1

## Show

**Signature**

```ts
export declare const Show: S.Show<SafeNumber>
```

Added in v0.0.1

# Refinements

## isSafeNumber

**Signature**

```ts
export declare const isSafeNumber: Refinement<number, SafeNumber>
```

Added in v0.0.1

# Type

## SafeNumber (type alias)

**Signature**

```ts
export type SafeNumber = number & { readonly SafeNumber: unique symbol }
```

Added in v0.0.1

# utils

## URI

**Signature**

```ts
export declare const URI: 'primitives-ts/SafeNumber'
```

Added in v0.0.1
