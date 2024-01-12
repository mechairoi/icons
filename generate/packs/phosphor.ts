import glob from "fast-glob";
import { definePack } from "../define-pack";
import { extractor } from "../extractor";

export const phosphorPack = definePack({
  name: "Phosphor",
  prefix: "Ph",
  variants: {
    variant: [ "bold",  "duotone",  "fill",  "light",  "regular",  "thin" ]
  },
  defaultVariants: { variant: "regular" },
  contents: {
    files: glob("node_modules/@phosphor-icons/core/assets/*/*.svg"),
    extract: extractor(/^.*\/(?<variant>.+)\/(?<name>.+?)\.svg/, { variant: "" }),
  },
  projectUrl: "https://phosphoricons.com/",
  license: "MIT",
  licenseUrl: "https://github.com/phosphor-icons/core/blob/main/LICENSE",
  coloring: "keep",
});
