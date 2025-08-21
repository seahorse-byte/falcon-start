import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    jsxFactory: 'createFalconElement',
    jsxFragment: 'Fragment',
  },
  plugins: [
    react({
      jsxRuntime: 'classic',
    }),
  ],
});
