import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
// base must match the GitHub Pages project URL path: https://th-da.github.io/3D-CV/
export default defineConfig({
  base: '/3D-CV/',
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
