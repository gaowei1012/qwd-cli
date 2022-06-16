/*
 * @Author: mingwei
 * @Date: 2022-06-13 16:41:06
 * @LastEditors: mingwei
 * @LastEditTime: 2022-06-14 17:40:16
 * @FilePath: /dg-cli/src/templates/react/template/vite.config.ts
 * @Description:
 */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginImp from "vite-plugin-imp";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    react(),
    vitePluginImp({
      libList: [
        {
          libName: "antd",
          // style: name => `antd/es/${name}/style`,
          style: () => `antd/dist/antd.css`,
        },
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
    ],
  },
  build: {
    cssCodeSplit: true, // css代码分割
    outDir: "./build",
  },
});
