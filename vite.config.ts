// import { fileURLToPath, URL } from 'node:url';
// import react from '@vitejs/plugin-react';
// import { defineConfig } from 'vite';
// import tailwindcss from 'tailwindcss';

// export default defineConfig({
//   plugins: [react()],
//   css: {
//     postcss: {
//       plugins: [tailwindcss()]
//     }
//   },
//   base: '/serviceon',
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url))
//     }
//   },
//   build: {
//     chunkSizeWarningLimit: 3000
//   }
// });












import { fileURLToPath, URL } from 'node:url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss';

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()]
    }
  },
  
  //  base changes automatically based on environment
  base: mode === 'development' ? '/serviceon' : './',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    chunkSizeWarningLimit: 3000
  }
}));
