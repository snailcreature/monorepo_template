import 'module-alias/register'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  // ...
  resolve: {
    alias: {
        '@enums': path.resolve(__dirname, './src/enums'),
        '@utils': path.resolve(__dirname, './src/utils')
    }
  },
  build: {
    outDir: './build',
  },
  server: {
    proxy: {
        '/api': {
            target: 'http://localhost:3000',
            changeOrigin: true,
            secure: false,
        }
    }
  }
})