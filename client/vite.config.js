import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/static/',
  build: {
    //! this is the folder where vite will generate it's output, MAKE SURE DJANGO CAN SERVE FILES FROM HERE
    outDir: '../server/static',

    //! delete the old build when creating new build
    //! this is the default behavior, unless outDir is outside of the current directory
    emptyOutDir: true,
    sourcemap: true,

  },
})
