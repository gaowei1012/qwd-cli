/*
 * @Author: mingwei
 * @Date: 2022-06-14 13:01:18
 * @LastEditors: mingwei
 * @LastEditTime: 2022-06-14 15:12:23
 * @FilePath: /vite-project/src/App.tsx
 * @Description:
 */

import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "./hooks/useStore";

const App = observer(() => {
  const { newInstance } = useStore();

  useEffect(() => {
    (async () => {
      await newInstance.login();
    })();
  }, []);

  return <div>app</div>;
});

export default App;
