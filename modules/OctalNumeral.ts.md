---
title: OctalNumeral.ts
nav_order: 5
parent: Modules
---

## OctalNumeral overview

Octal string numeral with prefix '0o'

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
  - [isOctalNumeral](#isoctalnumeral)
- [Type](#type)
  - [OctalNumeral (type alias)](#octalnumeral-type-alias)
- [utils](#utils)
  - [URI](#uri)

---

# IO

## Codec

**Signature**

```ts
export declare const Codec: Codec<unknown, string, OctalNumeral>
```

Added in v0.0.1

## Decoder

**Signature**

```ts
export declare const Decoder: DEC.Decoder<unknown, OctalNumeral>
```

Added in v0.0.1

## Encoder

**Signature**

```ts
export declare const Encoder: ENC.Encoder<string, OctalNumeral>
```

Added in v0.0.1

# Instances

## Eq

**Signature**

```ts
export declare const Eq: E.Eq<OctalNumeral>
```

Added in v0.0.1

## Ord

**Signature**

```ts
export declare const Ord: O.Ord<OctalNumeral>
```

Added in v0.0.1

## Show

**Signature**

```ts
export declare const Show: S.Show<OctalNumeral>
```

Added in v0.0.1

# Refinements

## isOctalNumeral

**Signature**

```ts
export declare const isOctalNumeral: Refinement<string, OctalNumeral>
```

Added in v0.0.1

# Type

## OctalNumeral (type alias)

**Signature**

```ts
export type OctalNumeral = string & {
  readonly OctalNumeral: unique symbol
}
```

Added in v0.0.1

# utils

## URI

**Signature**

```ts
export declare const URI: 'primitives-ts/OctalNumeral'
```

Added in v0.0.1
