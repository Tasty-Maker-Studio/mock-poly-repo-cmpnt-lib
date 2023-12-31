import { readFile, writeFile } from "fs/promises"
import { defineConfig } from "tsup";
import type { Options } from "tsup";

const client = [
  "./src/ImageToggle/index.ts",
];

const server = [
  './src/ImageToggle/index.ts',
  './src/SplashSection/index.ts',
  './src/Button/index.ts',
  './src/Text/index.ts',
];

export default defineConfig((opts) => {
  const common = {
    clean: !opts.watch,
    dts: true,
    format: ["esm"],
    minify: false,
    outDir: "dist",
  } satisfies Options;

  return [
    {
      ...common,
      entry: ["./src/index.ts", ...server],
    },
    {
      ...common,
     entry: client,
      esbuildOptions: (opts) => {
        opts.banner = {
          js: '"use client";',
        };
     },
      async onSuccess() {
        const pkgJson = JSON.parse(
            await readFile("./package.json", {
              encoding: "utf-8",
            }),
        ) as PackageJson;
        pkgJson.exports = {
          "./package.json": "./package.json",
          ".": {
            import: "./dist/index.mjs",
            types: "./dist/index.d.ts",
          },
        };;
          [...client, ...server]
            .filter((e) => e.endsWith(".ts"))
            .forEach((entry) => {
              const file = entry.replace("./src/", "").replace(".ts", "");
              const dirName = file.replace("/index", "");
              pkgJson.exports["./" +dirName] = {
                import: "./dist/" + file + ".mjs",
                types: "./dist/" + file + ".d.ts",
              };
              pkgJson.typesVersions["*"][dirName] = ["dist/" + file + ".d.ts"];
            });

        await writeFile("./package.json", JSON.stringify(pkgJson, null, 2));
      },
    },
  ];
});

type PackageJson = {
  name: string;
  exports: Record<string, { import: string; types: string } | string>;
  typesVersions: Record<"*", Record<string, string[]>>;
  files: string[];
  dependencies: Record<string, string>;
  pnpm: {
    overrides: Record<string, string>;
  };
};
