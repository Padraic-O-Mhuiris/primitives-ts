---
title: HexadecimalString.ts
nav_order: 3
parent: Modules
---

## HexadecimalString overview

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
  - [HexadecimalString (type alias)](#hexadecimalstring-type-alias)

---

# IO

## Codec

**Signature**

```ts
export declare const Codec: Codec<unknown, string, HexadecimalString>
```

Added in v0.0.1

## Decoder

**Signature**

```ts
export declare const Decoder: DEC.Decoder<unknown, HexadecimalString>
```

Added in v0.0.1

## Encoder

**Signature**

```ts
export declare const Encoder: ENC.Encoder<string, HexadecimalString>
```

Added in v0.0.1

# Instances

## Eq

**Signature**

```ts
export declare const Eq: E.Eq<HexadecimalString>
```

Added in v0.0.1

## Ord

**Signature**

```ts
export declare const Ord: O.Ord<HexadecimalString>
```

Added in v0.0.1

## Show

**Signature**

```ts
export declare const Show: S.Show<HexadecimalString>
```

Added in v0.0.1

# Type

## HexadecimalString (type alias)

Captures strings which represent hexadecimal representations of numbers

**Signature**

```ts
export type HexadecimalString = string & {
  readonly HexadecimalString: unique symbol
}
```

Added in v0.0.1
