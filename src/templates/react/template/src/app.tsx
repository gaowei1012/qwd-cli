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
