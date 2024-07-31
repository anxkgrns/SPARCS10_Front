import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';
import config from './src/requests/config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    svgrPlugin(),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'https://clovastudio.stream.ntruss.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/local': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/local/, ''),
      },
      '/server' : {
        target: `${config.server}`,
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/server/, ''),
      },
      '/imageApi' : {
        target: `https://afcwx7ljke.apigw.ntruss.com/custom/v1/33177/e0496c07c9929bb6a11fdd55c2ee54beacda9103d6f81cf01129f3f810da7108/general`,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/imageApi/, ''),
      }
    }
  },
});