import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'
import svgr from '@svgr/rollup'
import url from '@rollup/plugin-url'
import analyze from 'rollup-plugin-analyzer'

const packageJson = require('./package.json')

export default {
  input: 'src/index.ts',
  output: [
    {
      exports: 'named',
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      exports: 'named',
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
    {
      name: 'ReactLibraryStarter',
      file: packageJson.unpkg,
      format: 'umd',
      globals: {
        react: 'React',
      },
    },
  ],
  plugins: [
    peerDepsExternal(),
    postcss({
      minimize: true,
      modules: false,
      extract: true,
      config: {
        path: './postcss.config.js',
        ctx: null,
      },
    }),
    url(),
    svgr(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    analyze(),
  ],
  external: ['react'],
}
