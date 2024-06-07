// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  esbuild: {
    // Add a custom esbuild loader configuration
    loader: {
      '.js': 'jsx' // Specify that files with .js extension should be treated as JSX files
    }
  }
});
