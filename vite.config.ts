import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    // Slidev 53's code.css uses `--uno: … dark-text-gray-600`, which UnoCSS 66
    // expands into a malformed rule; Vite 8's lightningcss minifier rejects it
    // and `slidev build` fails. Skipping CSS minification lets the build
    // through (browsers just drop that one dark-mode rule). Remove once a
    // Slidev release fixes it: run `npm run build` to check.
    cssMinify: false,
  },
})
