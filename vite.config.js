import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    strictPort: true,
    port: 5173,
    allowedHosts: [
      ".gitpod.io",
      "allowedHosts: ws-eu118.gitpod.io"
    ]
  }
  
})
