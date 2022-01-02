---
title: Numeral/Binary.ts
nav_order: 2
parent: Modules
---

## Binary overview

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
  - [Binary (type alias)](#binary-type-alias)

---

# IO

## Codec

**Signature**

```ts
export declare const Codec: Codec<unknown, string, Binary>
```

Added in v0.0.1

## Decoder

**Signature**

```ts
export declare const Decoder: DEC.Decoder<unknown, Binary>
```

Added in v0.0.1

## Encoder

**Signature**

```ts
export declare const Encoder: ENC.Encoder<string, Binary>
```

Added in v0.0.1

# Instances

## Eq

**Signature**

```ts
export declare const Eq: E.Eq<Binary>
```

Added in v0.0.1

## Ord

**Signature**

```ts
export declare const Ord: O.Ord<Binary>
```

Added in v0.0.1

## Show

**Signature**

```ts
export declare const Show: S.Show<Binary>
```

Added in v0.0.1

# Type

## Binary (type alias)

Binary string numeral with prefix '0b'

**Signature**

```ts
export type Binary = string & {
  readonly Binary: unique symbol
}
```

Added in v0.0.1
