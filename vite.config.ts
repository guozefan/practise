import vue from '@vitejs/plugin-vue';
import path from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Icons from 'unplugin-icons/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import { defineConfig, loadEnv } from 'vite';
import vueJsx from "@vitejs/plugin-vue-jsx";

const pathSrc = path.resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());   // 获取.env文件里定义的环境变量
  return defineConfig({
    server: {
      host: true,
      port: 8080,
      open: true,
      proxy: {
        '/apiTest': { //apiTest是自行设置的请求前缀，按照这个来匹配请求，有这个字段的请求，就会进到代理来
          target: env.VITE_BASE_URL,
          changeOrigin: true, //是否跨域
          rewrite: (url) => url.replace(/^\/apiTest/, '')
        }
      }
    },
    resolve: {
      alias: {
        '@': pathSrc
      }
    },
    plugins: [
      vue(),
      vueJsx(),
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

}
