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
    port: process.env.VITE_PORT ?? 8080,
    proxy: {
        '/api': {
            target: process.env.VITE_SERVER_URL,
            changeOrigin: true,
            secure: false,
        }
    }
  }
})