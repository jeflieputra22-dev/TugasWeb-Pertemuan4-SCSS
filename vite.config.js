import { defineConfig } from "vite";

// Vite sudah punya dukungan SCSS bawaan (lewat Dart Sass)
// selama package "sass" ter-install sebagai devDependency.
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
});
