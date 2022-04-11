# gulab-client

Monorepo for the client side projects.

# Instructions

## Creating New Package

- `$ npx create-react-app --template typescript`
- Update package.json version to 1.0.0

## Versioning

Versioning should be done in CI environment. <br />
When creating new packages the initial version needs to be 1.0.0.

Running `$ yarn lerna-version` will execute `$ lerna version --conventional-commits -m "chore(release): publish"`

Using `--conventional-commits` flag will:

- determine the next version
- update CHANGELOG.md

# Guidelines

## Commit Message

- Use [Conventional Commits](https://conventionalcommits.org) for commit guidelines.
- Use the following format `<type>: (<project-name>-<issue-number>) <description>`

## Typography

Use `rem` for font-size. By using `rem` and other relative units you respect the users’ decisions about the way they want to browse the web. [Blog post](https://www.sitepoint.com/understanding-and-using-rem-units-in-css/).

## Palette

Color: Primary, Accent, Info(Blue), Success(Green), Warning(Yellow), Error(Red), Grey.

- Generate 7 to 9 shades from each color and 10 from the Grey.
- To generate shades start with a color that matches the hue of your base color, and adjust the saturation and lightness until you're satisfied.
- Use the dark shades for text. The bright shades for backgrounds.
- True Black doesn't look natural for text. Use dark grey instead.

## Type Declaration

Type Declaration files (`.d.ts`) should not be used because they are not recognized as input files from the transpiler and therefore will not be included in the build output.
Instead we should use only `.ts` files.

## Images and SVGs

When importing SVGs some of the properties are not recognized by React and can't be built. They need to be converted to camelCase or removed. The idea is to create camelCase property, remember that you are working with JSX, you are not creating a string as XML does.

# Technical Debt

## Yarn

We can't upgrade yarn to a newer version because of storybook (currently using 1.19.0).
Yarn 1.19.0 doesn't work for creating new packages.
You can read more [here](https://github.com/yarnpkg/yarn/issues/8405) and [here](https://github.com/storybookjs/storybook/issues/14429).

## Module Declarations

Module declarations (used for extending the types of MUI Theme, Axios Requests etc.) do not work outside of the project in which they are defined unless their file is imported.
Currently the module declaration files for the extended themes are imported in the ThemeProvider (`core-ui`) so that they can be available in all packages that are using it. Without this the linter is not complaining but the build will fail.

## Linters

ESLint is disabled for `.test.\*` files.

Do we need `babel-plugin-module-resolver`?

## Preparation for CI

Disable husky in CI
https://typicode.github.io/husky/#/?id=disable-husky-in-cidocker

Run `$ npx prettier --check .` in CI to make sure that your project stays formatted.

## TODOs

Fix the Logger to work with exceptions

- check it's connected to sentry correctly;
- see if we can use it as message plus error;

Proper way to load translations for widget and apps?

- we don't want to clal init in each package;
- but we need to for when we want to run only that package and not the whole app;
- maybe some singleton pattern;

Loading Fonts
how to correctly load fonts for whitelabel?
Rubik,Avenir Next,Helvetica Neue,sans-serif
https://fonts.google.com/knowledge/using_type/using_web_fonts
https://fonts.google.com/specimen/Rubik?category=Serif,Sans+Serif&subset=latin-ext&query=rubik#standard-styles

Whitelabel system

- define structure and what data it will store: company info, styles (do we build themes in the code or import from whitelabel, fonts, specialized translations, keys)
- local mock with .json files

Test of CTC Text not ok

After we create an app we should create and test a web component.

// TODO: cross-env NODE_ENV=production yarn webpack <br />
Versioning should be done in CI environment.

// TODO:
Check does ESLint errors interupt the build?
Check does ESLint errors prevent git push?

// TODO: Update guidelines for the type of language codes we use
https://www.fincher.org/Utilities/CountryLanguageList.shtml
Languages are not required to be in translations

// TODO: Menu items in sidebar should be selected based on the current route/path
