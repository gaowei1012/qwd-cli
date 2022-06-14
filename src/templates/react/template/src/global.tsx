import React from "react";
import { Spin } from "antd";
import { useStore } from "./hooks/useStore";
import { LoadingOutlined } from "@ant-design/icons";
import { observer } from "mobx-react-lite";

export const Global: React.FC<{ children: React.ReactElement }> = observer(
  ({ children }) => {
    const { loadingInstance } = useStore();
    const spinIcon = <LoadingOutlined />;
    console.log("global", loadingInstance.loading);
    return (
      <Spin
        tip="加载中..."
        spinning={loadingInstance.loading}
        indicator={spinIcon}
      >
        {children}
      </Spin>
    );
  }
);
