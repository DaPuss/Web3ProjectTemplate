import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'
import rollupNodePolyFill from 'rollup-plugin-node-polyfills'

export default defineConfig({
  plugins: [react()],
  define: {
    "global": {},
  },
  resolve: {
    alias: {
      process: 'process/browser',
      util: 'rollup-plugin-node-polyfills/polyfills/util', 
       },
  },
})
