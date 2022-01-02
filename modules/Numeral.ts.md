---
title: Numeral.ts
nav_order: 4
parent: Modules
---

## Numeral overview

A `Numeral` is a string that represents a numerical quantity.

Currently the `Numeral` type supports

- Decimals no prefix
- Hexadecimal 0x prefix
- Octal 0o prefix
- Binary 0b prefix

Prefixes are necessary to discern between different numeral types

Added in v0.0.1

---

<h2 class="text-delta">Table of contents</h2>

- [Type](#type)
  - [Numeral (type alias)](#numeral-type-alias)

---

# Type

## Numeral (type alias)

The `Numeral` type

**Signature**

```ts
export type Numeral = string & { readonly Numeral: unique symbol }
```

Added in v0.0.1
