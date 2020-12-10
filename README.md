# react-library-starter

> ⚡ A bundler for your React projects, powered by Rollup.

## Features

- React with TypeScript support
- [Rollup](https://rollupjs.org/) for bundling (with a customizable bundler config file)
- [Babel](https://babeljs.io/) for transpiling
- [Storybook](https://storybook.js.org) for development and component explorer
- Uses [TailwindCSS 2.0](https://blog.tailwindcss.com/tailwindcss-v2)
- Supports CSS modules
- Supports CJS, ESM and UMD formats
- Peer dependencies to external deps detection
- Sourcemap creation


## Development

Clone this repo and run the following commands to start development with storybook.

```bash
npm install --production=false
npm run storybook
```

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
