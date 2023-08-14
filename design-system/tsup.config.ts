import { defineConfig } from 'tsup';

export default defineConfig({
  external: ['@tms/styled-system'],
  format: ['cjs', 'esm'],
  entry: ['src/index.ts'],
  dts: true,
  sourcemap: true,
  clean: true
});
