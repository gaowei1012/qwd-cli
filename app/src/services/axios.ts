import axios, { AxiosError, AxiosResponse, AxiosRequestConfig } from "axios";
import { error_code } from "../config";
import { DOMAIN_URL } from "./domain";
import { rootStore } from "../stores";
import { message } from "antd";

type responseBody<T = any> = {
  success: boolean;
  statusCode: number;
  message: string;
  data: T;
};

// 设置默认属性
const service = axios.create({
  baseURL: DOMAIN_URL,
  timeout: 3 * 1000,
});

// 请求拦截器
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    config.headers = {
      "Content-Type": "application/json",
    };
    rootStore.loadingInstance.set_loading();
    return config;
  },
  (err: AxiosError) => {
    return Promise.reject(err);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse<responseBody>) => {
    // 对相应错误拦截
    if (
      response.status == 200 &&
      response.statusText == "OK" &&
      response.data.statusCode == 200
    ) {
      rootStore.loadingInstance.remove_loading();
      return response.data;
    } else {
      rootStore.loadingInstance.remove_loading();
      message.error(response.data.message);
    }
  },
  (err: any) => {
    console.error(err);
    rootStore.loadingInstance.remove_loading();
    if (
      [error_code.SessionInvalidError, error_code.SessionNotFoundError].indexOf(
        err.statusCode
      ) != -1
    ) {
      // other code
    }
    return Promise.reject(err.response);
  }
);

export { service };
