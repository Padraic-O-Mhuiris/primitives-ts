---
title: utils.ts
nav_order: 3
parent: Modules
---

## utils overview

Added in v0.0.1

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [encodeAsUnderlying](#encodeasunderlying)

---

# utils

## encodeAsUnderlying

Convenience function for simple construction of `Encoder<B, A` for branded types

**Signature**

```ts
export declare const encodeAsUnderlying: { encode: <A, B>(a: A) => B }
```

Added in v0.0.1
