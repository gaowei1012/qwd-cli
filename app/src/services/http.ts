import { service } from "./axios";

const http = {
  /**
   * get请求方法
   * @param url 请求url地址
   * @param params 请求参数
   * @returns new Promise()
   */
  get(url: string, params: any) {
    const config = {
      method: "get",
      url,
      params: "",
    };
    if (params) config.params = params;
    return service(config);
  },

  /**
   * post请求方法
   * @param url 请求url地址
   * @param data 请求body参数体
   * @returns new Promise()
   */
  post(url: string, data: any) {
    const config = {
      method: "post",
      url,
      data: {},
    };
    if (data) config.data = data;
    return service(config);
  },

  /**
   * put请求方法
   * @param url 请求url地址
   * @param params 请求参数
   * @returns new Promise()
   */
  put(url: string, data: any) {
    const config = {
      method: "put",
      url,
      data: {},
    };
    if (data) config.data = data;
    return service(config);
  },

  /**
   * delete请求方法
   * @param url 请求url地址
   * @param params 请求参数
   * @returns new Promise()
   */
  del(url: string) {
    const config = {
      method: "delete",
      url,
    };
    return service(config);
  },
};

export { http };
