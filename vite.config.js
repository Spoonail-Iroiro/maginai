// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';
import * as fs from 'node:fs/promises';

export default defineConfig({
  build: {
    target: 'es2015',
    outDir: resolve(__dirname, 'game/game/js/mod'),
    emptyOutDir: true,
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'js/mod/loader.js'),
      name: 'maginai',
      formats: ['iife'],
      // 適切な拡張子が追加されます
      fileName: 'loader',
    },
    rollupOptions: {
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
      },
    },
  },
  plugins: [
    {
      name: 'copy-mod-assets',
      closeBundle: async () => {
        const devRoot = 'js/mod';
        const buildRoot = 'game/game/js/mod';
        try {
          await fs.mkdir(resolve(__dirname, buildRoot));
        } catch (err) {
          if (err.code !== 'EEXIST') throw err;
        }
        await fs.cp(
          resolve(__dirname, devRoot, 'mods'),
          resolve(__dirname, buildRoot, 'mods'),
          {
            recursive: true,
          }
        );
        await fs.cp(
          resolve(__dirname, devRoot, 'config.js'),
          resolve(__dirname, buildRoot, 'config.js')
        );
      },
    },
  ],
  test: {
    setupFiles: ['./tests/vitest.setup.ts'],

    alias: {
      '@': resolve(__dirname, './js/mod'),
    },
  },
});
