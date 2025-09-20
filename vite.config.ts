import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'
 
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: [
      'localhost',
      "127.0.0.1",
      '127.0.0.1.nip.io'
    ]
  },
  resolve: {
    alias: {
      '@/components': path.resolve(__dirname, './src/components'),
      '@/ui': path.resolve(__dirname, './src/components/ui'),
      '@/views': path.resolve(__dirname, './src/components/views'), 
      '@/quiz': path.resolve(__dirname, './src/components/quiz'),
      '@/forms': path.resolve(__dirname, './src/components/forms'),
      '@/icons': path.resolve(__dirname, './src/components/icons'),
      '@/hooks': path.resolve(__dirname, './src/hooks'),
      '@/types': path.resolve(__dirname, './src/types'),
      '@/utils': path.resolve(__dirname, './src/utils'),
      '@/services': path.resolve(__dirname, './src/services'),
      '@/contexts': path.resolve(__dirname, './src/contexts'),
      '@/assets': path.resolve(__dirname, './src/assets'),
      '@/auth': path.resolve(__dirname, './src/auth')
    }
  }
})
