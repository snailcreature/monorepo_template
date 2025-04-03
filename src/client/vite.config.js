import 'module-alias/register'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  // ...
  resolve: {
    alias: {
        // eslint-disable-next-line no-undef
        '@enums': path.resolve(__dirname, './src/enums'),
        // eslint-disable-next-line no-undef
        '@utils': path.resolve(__dirname, './src/utils')
    }
  },
  build: {
    outDir: './build',
  },
  server: {
    // eslint-disable-next-line no-undef
    port: process.env.VITE_PORT ?? 8080,
    proxy: {
        '/api': {
            // eslint-disable-next-line no-undef
            target: process.env.VITE_SERVER_URL,
            changeOrigin: true,
            secure: false,
        }
    }
  }
})