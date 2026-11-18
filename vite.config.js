import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import babelPluginReactCompiler from 'babel-plugin-react-compiler'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          babelPluginReactCompiler,
        ],
      },
    }),
  ],
})
