import vue from '@vitejs/plugin-vue';
import path from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Icons from 'unplugin-icons/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';

const pathSrc = path.resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 8080,
    open: true,
  },
  resolve: {
    alias: {
      '@': pathSrc
    }
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [
        ElementPlusResolver(),
      ],
    }),
    Components({
      dirs: ['src/components/'],
      resolvers: [
        ElementPlusResolver()
      ],
    }),
    Icons({
      autoInstall: true,
    }),

  ],



  build: {
    outDir: "dist",
    // 消除打包大小超过500kb警告
    chunkSizeWarningLimit: 2000,
    // 在生产环境移除console.log
    terserOptions: {
      compress: {
        drop_console: false,
        pure_funcs: ['console.log', 'console.info'],
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
      },
    },
  },
})
