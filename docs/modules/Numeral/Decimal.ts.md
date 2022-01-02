---
title: Numeral/Decimal.ts
nav_order: 3
parent: Modules
---

## Decimal overview

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
- [Type](#type)
  - [Decimal (type alias)](#decimal-type-alias)

---

# IO

## Codec

**Signature**

```ts
export declare const Codec: Codec<unknown, string, Decimal>
```

Added in v0.0.1

## Decoder

**Signature**

```ts
export declare const Decoder: DEC.Decoder<unknown, Decimal>
```

Added in v0.0.1

## Encoder

**Signature**

```ts
export declare const Encoder: ENC.Encoder<string, Decimal>
```

Added in v0.0.1

# Instances

## Eq

**Signature**

```ts
export declare const Eq: E.Eq<Decimal>
```

Added in v0.0.1

## Ord

**Signature**

```ts
export declare const Ord: O.Ord<Decimal>
```

Added in v0.0.1

## Show

**Signature**

```ts
export declare const Show: S.Show<Decimal>
```

Added in v0.0.1

# Type

## Decimal (type alias)

Decimal string numeral including exponents

**Signature**

```ts
export type Decimal = string & {
  readonly Decimal: unique symbol
}
```

Added in v0.0.1
