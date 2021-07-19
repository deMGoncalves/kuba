'use strict'

module.exports = {
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      }
    }
  }
}
