# Qwik Icons

Include popular icons easily in your Qwik projects with `@qwikest/icons` 🚀

Currently included libraries (with icon prefix):

- `Lu`: [Lucide](https://lucide.dev/) icons
- `Go`: [Octicons](https://primer.style/design/foundations/icons/) by GitHub
- `Hi`: [Heroicons](https://heroicons.com/) by Tailwind
- `Io`: [Ionicons](https://ionic.io/ionicons) by Ionic

## Installation

Simply install the package with your package manager of choice:

```bash
npm i @qwikest/icons
yarn add @qwikest/icons
pnpm add @qwikest/icons
```

## Usage

```tsx
import { LuRocket } from "@qwikest/icons/lucide";

export const MyComponent = component$(() => {
  // Icon size and color are inherited by default ⬇️
  return (
    <div style={{ color: "red", fontSize: "40px" }}>
      <LuRocket />
    </div>
  );
});
```

## Variants

A few libraries support different icon variants.
They can be configured via `useContext` or directly via props.
Feel free to use the context to specify a global default 🙏

```ts
export const MyComponent = component$(() => {
  useContextProvider(IoContext, { variant: "outline" });

  // IoAccessibility will infer `variant: outline` ⬇️
  return (
    <div>
      <IoAccessibility />
      <IoAddCircle variant="sharp" />
    </div>
  );
});
```

> Some libraries like `Octicons` even support different viewBoxes. Use the `res` property to specify them. Each icon library comes with a props type (like `LuProps`) which contains all possible variants!

## Available Libraries

```tsx
import { GoFlame24, .. } from "@qwikest/icons/octicons";
import { HiAcademicCapMini, .. } from "@qwikest/icons/heroicons";
import { IoAirplane, .. } from "@qwikest/icons/ionicons";
import { LuRocket, .. } from "@qwikest/icons/lucide";
```

> **Missing a library?** Feel free to [open an issue](https://github.com/qwikest/icons/issues/new?title=Add%20Icon%20Pack:) or even a MR 🤝
