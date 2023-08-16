import { defineConfig } from "@pandacss/dev";
import pandaPreset from "@pandacss/preset-panda";
// you need to separate the preset from the components othewise esbuild & panda get confused
import { tmsPandaPreset } from "@tms/design-system"

export default defineConfig({
  // Whether to include css reset styles in the generated css.
  preflight: true,

  // Where to look for your css declarations
  include: [
    "node_modules/@tms/design-system/src/**/*.{ts,tsx,js,jsx}",
    // you could also very well include the buildinfo.json file instead of the source files
    "node_modules/@tms/design-system/dist/panda.buildinfo.json",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  presets: [pandaPreset, tmsPandaPreset],

  exclude: [],
  jsxFramework: "react",
  emitPackage: true,
  outdir: "@tms/styled-system",
});
