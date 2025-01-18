import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about.html',
        contributors: 'contributors.html'
      }
    }
  },
  server: {
    port: 3000
  },
})
