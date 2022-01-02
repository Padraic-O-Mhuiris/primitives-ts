---
title: Numeral/Octal.ts
nav_order: 5
parent: Modules
---

## Octal overview

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
  - [isOctal](#isoctal)
- [Type](#type)
  - [Octal (type alias)](#octal-type-alias)

---

# IO

## Codec

**Signature**

```ts
export declare const Codec: Codec<unknown, string, Octal>
```

Added in v0.0.1

## Decoder

**Signature**

```ts
export declare const Decoder: DEC.Decoder<unknown, Octal>
```

Added in v0.0.1

## Encoder

**Signature**

```ts
export declare const Encoder: ENC.Encoder<string, Octal>
```

Added in v0.0.1

# Instances

## Eq

**Signature**

```ts
export declare const Eq: E.Eq<Octal>
```

Added in v0.0.1

## Ord

**Signature**

```ts
export declare const Ord: O.Ord<Octal>
```

Added in v0.0.1

## Show

**Signature**

```ts
export declare const Show: S.Show<Octal>
```

Added in v0.0.1

# Refinements

## isOctal

**Signature**

```ts
export declare const isOctal: Refinement<string, Octal>
```

Added in v0.0.1

# Type

## Octal (type alias)

**Signature**

```ts
export type Octal = string & {
  readonly Octal: unique symbol
}
```

Added in v0.0.1
