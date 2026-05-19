import { defineConfig } from 'vite';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => ({
  // Set base path based on the environment (development or production)
  base: command === "serve" ? "/" : "/landing/",  // Base path

  plugins: [react(), tailwindcss()],  // Vite plugins

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),  // Alias for 'src' directory
    },
  },

  build: {
    outDir: 'build',  // Output folder for production build
  },

  assetsInclude: ['**/*.svg', '**/*.csv'],  // Assets to include in build
}));