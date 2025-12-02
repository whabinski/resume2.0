import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite configuration for this React project
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],  // Enable React fast-refresh and JSX support
  base: './',  // Use relative paths so the app works when served from a subdirectory
})
