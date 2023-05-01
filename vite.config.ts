/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import istanbul from 'vite-plugin-istanbul';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['istanbul']],
      },
    }),
    istanbul({
      cypress: true,
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/tests.ts'],
    css: {
      modules: {
        classNameStrategy: 'non-scoped',
      },
    },
    coverage: {
      provider: 'c8',
      enabled: true,
      reporter: ['text'],
      all: true,
    },
  },
  css: {
    modules: {
      generateScopedName: function (name) {
        return name;
      },
    },
  },
  build: {
    minify: false,
    sourcemap: true,
  },
  ssr: {
    noExternal: ['@reduxjs/toolkit'],
  },
});
