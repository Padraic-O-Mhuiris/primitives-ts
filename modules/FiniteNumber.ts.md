---
title: FiniteNumber.ts
nav_order: 1
parent: Modules
---

## FiniteNumber overview

Added in v0.0.1

---

<h2 class="text-delta">Table of contents</h2>

- [IO](#io)
  - [decoder](#decoder)
- [Type](#type)
  - [FiniteNumber (type alias)](#finitenumber-type-alias)

---

# IO

## decoder

Decoder for `FiniteNumber`

**Signature**

```ts
export declare const decoder: Decoder<unknown, FiniteNumber>
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
