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
