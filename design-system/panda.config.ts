import { defineConfig } from '@pandacss/dev';
import pandaPreset from '@pandacss/preset-panda';

import { tmsPandaPreset } from './src/theme/tms-panda-preset';

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './stories/**/*.{js,jsx,ts,tsx}'],
  presets: [pandaPreset, tmsPandaPreset],
  // Files to exclude
  exclude: [],
  jsxFramework: 'react',
  // The output directory for your css system
  emitPackage: true,
  outdir: '@tms/styled-system',
  theme: {
    extend: {
      breakpoints: {
        xxs: '320px',
        xs: '480px'
      }
    }
  }
});
