import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require("path");


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/jmbolg/',   //github部署使用
  build: {
    cssCodeSplit: false   //默认ture,将css分割提取到css文件中，false将全部css提取到一个文件里
  },

  resolve: {
    alias: {  //别名配置
      '@': path.resolve(__dirname, 'src'),   //配置src的别名
      '@comp': path.resolve(__dirname, 'src/components'),
    },
  },
  server: {
    proxy: {
      // 代理配置
      '/api': {
        target: 'http://www.test.com/datas',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      '/cnodejs': {
        target: 'https://cnodejs.org/api/v1',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/cnodejs/, '')
      },
    }
  }
})
