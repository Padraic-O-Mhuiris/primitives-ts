---
title: utils.ts
nav_order: 7
parent: Modules
---

## utils overview

Added in v0.0.1

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [\_encoder](#_encoder)

---

# utils

## \_encoder

Convenience function for simple construction of `Encoder<A, B>` for branded types

**Signature**

```ts
export declare const _encoder: { encode: <A, B>(a: A) => B }
```

Added in v0.0.1
