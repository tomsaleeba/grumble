// lets us find dependencies in node_modules
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default [
  {
    input: 'src/sw.js',
    output: {
      file: 'src/sw-dist.js',
      format: 'iife',
    },
    plugins: [nodeResolve(), commonjs()],
  },
  {
    input: 'src/main.js',
    output: {
      file: 'src/app-dist.js',
      format: 'iife',
    },
    plugins: [nodeResolve(), commonjs()],
  },
]
