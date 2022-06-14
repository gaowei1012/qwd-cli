/*
 * @Author: mingwei
 * @Date: 2022-06-13 16:41:06
 * @LastEditors: mingwei
 * @LastEditTime: 2022-06-14 15:32:39
 * @FilePath: /vite-project/src/main.tsx
 * @Description:
 */
import React from "react";
import { createRoot } from "react-dom/client";
import { StoreProvider } from "./hooks/useStore";
import { Global } from "./global";
import App from "./app";
import "./styles/global.scss";

const rootElement: any = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StoreProvider>
    <Global children={<App />} />
  </StoreProvider>
);
