import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dns from 'dns'
import path from 'path'

dns.setDefaultResultOrder('verbatim')

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias:{
      'views' : path.resolve(__dirname, './src/views')
    },
  },
  plugins: [react()],
})
