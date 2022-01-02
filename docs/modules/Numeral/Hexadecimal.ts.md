---
title: Numeral/Hexadecimal.ts
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
  - [isHexadecimal](#ishexadecimal)
- [Type](#type)
  - [Hexadecimal (type alias)](#hexadecimal-type-alias)

---

# IO

## Codec

**Signature**

```ts
export declare const Codec: Codec<unknown, string, Hexadecimal>
```

Added in v0.0.1

## Decoder

**Signature**

```ts
export declare const Decoder: DEC.Decoder<unknown, Hexadecimal>
```

Added in v0.0.1

## Encoder

**Signature**

```ts
export declare const Encoder: ENC.Encoder<string, Hexadecimal>
```

Added in v0.0.1

# Instances

## Eq

**Signature**

```ts
export declare const Eq: E.Eq<Hexadecimal>
```

Added in v0.0.1

## Ord

**Signature**

```ts
export declare const Ord: O.Ord<Hexadecimal>
```

Added in v0.0.1

## Show

**Signature**

```ts
export declare const Show: S.Show<Hexadecimal>
```

Added in v0.0.1

# Refinements

## isHexadecimal

**Signature**

```ts
export declare const isHexadecimal: Refinement<string, Hexadecimal>
```

Added in v0.0.1

# Type

## Hexadecimal (type alias)

**Signature**

```ts
export type Hexadecimal = string & {
  readonly Hexadecimal: unique symbol
}
```

Added in v0.0.1
