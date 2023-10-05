import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mkcert from 'vite-plugin-mkcert';

// Make it use https
// For the moment the app will be at the /mvrcc/ path

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    mkcert(), react()],
  server: {
    https: true,
  },
  base: '/mvrcc/',
})
