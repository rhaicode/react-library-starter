# react-library-starter

⚡ A library starter kit and bundler for your React projects, powered by Rollup.

## Features

- React with TypeScript support
- [Rollup](https://rollupjs.org/) for bundling (with a customizable bundler config file)
- [Babel](https://babeljs.io/) for transpiling
- [Storybook](https://storybook.js.org) for development and component explorer
- [SVGR](https://react-svgr.com/) support
- Uses [TailwindCSS 2.0](https://blog.tailwindcss.com/tailwindcss-v2)
- Linting before commit support with [ESLint](https://eslint.org/), [Husky](https://github.com/typicode/husky) and [Lint Staged](https://github.com/okonet/lint-staged)
- Supports CSS modules configurable with [PostCSS](https://postcss.org/)
- [styled-components](https://styled-components.com/) support
- [react-uuid](https://www.npmjs.com/package/react-uuid) for component key indexing
- Supports CJS, ESM and UMD formats
- Sourcemap creation


## Development

Clone this repo and run the following commands to start development with Storybook.

```bash
npm install --production=false
npm run storybook
```

Go to `localhost:6006` and you should see something like this.

![storybook-dev](https://user-images.githubusercontent.com/22829115/101779100-c59f8680-3b2f-11eb-985f-ca2ba37ed1f7.png)

## Building
To build your project, run `npm run build`.

## Publishing
```bash
npm publish
```
This builds `commonjs`, `esm`, and `umd` versions of your module to `dist/` and then publishes your module to `npm`.
Make sure that any npm modules you want as peer dependencies are properly marked as `peerDependencies` in `package.json`. The rollup config will automatically recognize them as peers and not try to bundle them in your module.

## License

MIT © [Rhaidzsal Ali](https://github.com/rhaicode)
