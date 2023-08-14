
'use client';
/*
  Because the design-system build is not retaining the 'use client' directive in the
  index.mjs ( or index.js ) file, we need to add it back in.  This is a temporary fix to
  get the site to load
 */
export {
    Button,
    Text,
    ImageToggle,
    SplashSection
} from '@tms/design-system'
