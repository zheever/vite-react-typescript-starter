import {defineConfig} from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';
import vitePluginImp from 'vite-plugin-imp';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        reactRefresh(),
        vitePluginImp({
            libList: [
                {
                    libName: "antd",
                    style: (name) => `antd/lib/${name}/style/index.less`,
                },
            ],
        })
    ],
    css: {
        preprocessorOptions: {
            less: {
                // 支持内联 JavaScript
                javascriptEnabled: true,
                // 重写 less 变量，定制样式
            }
        }
    },
    resolve: {
        alias: {
            '~': path.resolve(__dirname, './'),
            '@': path.resolve(__dirname, 'src')
        }
    },
})
