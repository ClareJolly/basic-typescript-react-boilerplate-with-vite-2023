import react from '@vitejs/plugin-react'
import { createHtmlPlugin } from 'vite-plugin-html'
import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src',
  build: {
    // Relative to the root
    outDir: '../dist',
  },
  plugins: [
    react({
      // Use React plugin in all *.jsx and *.tsx files
      include: '**/*.{jsx,tsx}',
    }),
    createHtmlPlugin({
      inject: {
        data: {
          title:
            env === 'production' ? 'My site' : `My site [${env.toUpperCase()}]`,
        },
      },
    }),
  ],
})
