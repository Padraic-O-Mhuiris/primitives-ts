---
title: DecimalString.ts
nav_order: 1
parent: Modules
---

## DecimalString overview

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
  - [DecimalString (type alias)](#decimalstring-type-alias)

---

# IO

## Codec

**Signature**

```ts
export declare const Codec: Codec<unknown, string, DecimalString>
```

Added in v0.0.1

## Decoder

**Signature**

```ts
export declare const Decoder: DEC.Decoder<unknown, DecimalString>
```

Added in v0.0.1

## Encoder

**Signature**

```ts
export declare const Encoder: ENC.Encoder<string, DecimalString>
```

Added in v0.0.1

# Instances

## Eq

**Signature**

```ts
export declare const Eq: E.Eq<DecimalString>
```

Added in v0.0.1

## Ord

**Signature**

```ts
export declare const Ord: O.Ord<DecimalString>
```

Added in v0.0.1

## Show

**Signature**

```ts
export declare const Show: S.Show<DecimalString>
```

Added in v0.0.1

# Type

## DecimalString (type alias)

Captures strings which represent decimal representations of numbers including exponents

**Signature**

```ts
export type DecimalString = string & {
  readonly DecimalString: unique symbol
}
```

Added in v0.0.1
