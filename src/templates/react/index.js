/*
 * @Author: mingwei
 * @Date: 2022-06-14 17:16:42
 * @LastEditors: mingwei
 * @LastEditTime: 2022-06-14 17:37:31
 * @FilePath: /dg-cli/src/templates/react/index.js
 * @Description:
 */
const { getFilesFormDir } = require("../../utils");

async function invokeReact() {
  const reactTemplate = await getFilesFormDir(__dirname);

  return {
    ...reactTemplate,
    pkg: {
      scripts: {
        "start:dev": "vite --mode dev",
        "start:local": "vite --mode local",
        "build:prod": "vite build --mode prod",
        build: "vite build --mode test",
        preview: "vite preview",
      },
      dependencies: {
        "@ant-design/icons": "^4.7.0",
        ahooks: "^3.4.1",
        antd: "^4.21.0",
        axios: "^0.27.2",
        mobx: "^6.6.0",
        "mobx-react-lite": "^3.4.0",
        react: "^18.0.0",
        "react-dom": "^18.0.0",
      },
      devDependencies: {
        "@types/node": "^17.0.42",
        "@types/react": "^18.0.0",
        "@types/react-dom": "^18.0.0",
        "@vitejs/plugin-react": "^1.3.0",
        "node-sass": "^7.0.1",
        sass: "^1.52.3",
        typescript: "^4.6.3",
        vite: "^2.9.9",
        "vite-plugin-imp": "^2.2.0",
      },
    },
  };
}

module.exports = invokeReact;
