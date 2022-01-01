---
title: FiniteNumber.ts
nav_order: 1
parent: Modules
---

## FiniteNumber overview

Added in v0.0.1

---

<h2 class="text-delta">Table of contents</h2>

- [Constants](#constants)
  - [one](#one)
  - [zero](#zero)
- [IO](#io)
  - [Codec](#codec)
  - [Decoder](#decoder)
  - [Encoder](#encoder)
- [Instances](#instances)
  - [Eq](#eq)
  - [Ord](#ord)
  - [Show](#show)
- [Type](#type)
  - [FiniteNumber (type alias)](#finitenumber-type-alias)

---

# Constants

## one

**Signature**

```ts
export declare const one: FiniteNumber
```

Added in v1.0.0

## zero

**Signature**

```ts
export declare const zero: FiniteNumber
```

Added in v0.0.1

# IO

## Codec

**Signature**

```ts
export declare const Codec: Codec<unknown, number, FiniteNumber>
```

Added in v0.0.1

## Decoder

**Signature**

```ts
export declare const Decoder: DEC.Decoder<unknown, FiniteNumber>
```

Added in v0.0.1

## Encoder

**Signature**

```ts
export declare const Encoder: ENC.Encoder<number, FiniteNumber>
```

Added in v0.0.1

# Instances

## Eq

**Signature**

```ts
export declare const Eq: E.Eq<FiniteNumber>
```

Added in v0.0.1

## Ord

**Signature**

```ts
export declare const Ord: O.Ord<FiniteNumber>
```

Added in v0.0.1

## Show

**Signature**

```ts
export declare const Show: S.Show<FiniteNumber>
```

Added in v0.0.1

# Type

## FiniteNumber (type alias)

Extension of `number` which filters `(-)Infinity` or `NaN`

**Signature**

```ts
export type FiniteNumber = number & { readonly FiniteNumber: unique symbol }
```

Added in v0.0.1
