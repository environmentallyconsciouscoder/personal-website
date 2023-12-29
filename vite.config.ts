import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/repository-name/', // Change this to your repository name
  build: {
    outDir: 'dist', // Adjust this based on your actual output directory
  },
});