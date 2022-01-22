# gulab-client

Monorepo for the client side projects

cross-env NODE_ENV=production yarn webpack

Do I need `babel-plugin-module-resolver`?

Do I have to generate `.d.ts` files?
How to generate `.d.ts` files per projects.
When linking projects it copies the whole project not just the build files

- the build files are in "js" and we can't import that
- when importing we must select `/src` to access the index.ts file

Currently ESLint errors will not interupt the build. Do we want them to?
ESLint errors must prevent git push

ESLint is disabled for .test.\* files
