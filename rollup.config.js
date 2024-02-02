import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { builtinModules } from 'node:module';

const indexes = ['node', 'digital_ocean'].map((adapter) => ({
  input: `src/index_${adapter}.js`,
  output: {
    file: `files/index_${adapter}.js`,
    format: 'esm'
  },
  plugins: [nodeResolve({ preferBuiltins: true }), commonjs(), json()],
  external: ['ENV', 'HANDLER', ...builtinModules]
}))

export default [
  ...indexes,
  {
    input: 'src/env.js',
    output: {
      file: 'files/env.js',
      format: 'esm'
    },
    plugins: [nodeResolve(), commonjs(), json()],
    external: ['HANDLER', ...builtinModules]
  },
  {
    input: 'src/handler.js',
    output: {
      file: 'files/handler.js',
      format: 'esm',
      inlineDynamicImports: true
    },
    plugins: [nodeResolve(), commonjs(), json()],
    external: ['ENV', 'MANIFEST', 'SERVER', 'SHIMS', ...builtinModules]
  },
  {
    input: 'src/shims.js',
    output: {
      file: 'files/shims.js',
      format: 'esm'
    },
    plugins: [nodeResolve(), commonjs()],
    external: builtinModules
  }
];
