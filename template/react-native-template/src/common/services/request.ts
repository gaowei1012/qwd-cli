import axios, { AxiosResponse, Method } from 'axios';
import { responseBody, requestOptions } from '@/common/types';
import { RootToast, getStorage } from '@/common/utils';
import rootStore from '@/rootStore';
import { navigate } from '@/common';

const defaultRequestOption: requestOptions = {
  showloading: false,
  throwErr: false,
  showMessage: true,
};

export function request(
  url: string,
  method: Method,
  data?: object,
  options?: requestOptions,
  atomic: boolean = true
): Promise<responseBody> {
  const { showloading, throwErr, showMessage } = { ...defaultRequestOption, ...options };
  return new Promise(async (resolve, reject) => {
    let body = method === 'GET' ? 'params' : 'data';
    if (showloading) {
      rootStore.loadingInstance.showLoading(true);
    }
    axios({
      url,
      method,
      [body]: data === null ? '' : data,
      headers: {
        'Content-Type': 'application/json',
        sessionid: (await getStorage('token')) ? await getStorage('token') : '',
      },
    })
      .then((res: AxiosResponse<responseBody>) => {
        if (atomic) {
          rootStore.loadingInstance.showLoading(false);
        }
        if (res.status === 200 && res.data.success === true && res.data.statusCode === 200) {
          resolve(res.data);
        } else {
          throw res.data;
        }
      })
      .catch((err: any) => {
        rootStore.loadingInstance.showLoading(false);
        if (showMessage) {
          RootToast.showToast(err.message);
        }
        if (err.statusCode === 30006) {
          navigate('chooseCummunity');
        }
        if (err.statusCode === 30003) {
          // reset('login');
          navigate('login');
        }
        // 登录非法，返回登录页面
        if (err.statusCode === 30002) {
          navigate('login');
        }
        if (throwErr) {
          reject(err);
        }
      });
  });
}
