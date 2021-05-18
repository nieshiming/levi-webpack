import axios, { Method, AxiosRequestConfig, AxiosResponse } from 'axios';
import { message } from 'antd';
import qs from 'qs';

/**
 *  @description 类型定义部分
 *  */
type Config = string;

interface Api {
  (payload?: object, config?: Partial<AxiosRequestConfig>): AxiosResponse['data'];
}

interface ApiGenerator {
  (config: Config): Api;
}

const instance = axios.create({
  timeout: 60000,
  responseType: 'text',
  withCredentials: true,
  headers: {
    Pragma: 'no-cache',
    Accept: 'application/json',
    'Cache-Control': 'no-cache, no-store, must-revalidate'
  },
  baseURL: '/'
});

/** 请求拦截器 */
instance.interceptors.request.use(
  config => {
    /** 启用nodejs 服务 */
    if (config.url.startsWith('/api')) {
      config.baseURL = 'http://10.180.21.95:3000/';
    }

    return config;
  },
  err => Promise.reject(err)
);

/** 响应拦截器 */
instance.interceptors.response.use(
  response => {
    return response;
  },
  err => Promise.reject(err)
);

function request(config: AxiosRequestConfig & { noErrorMsg?: boolean }) {
  return instance.request(config).then(
    async response => {
      const { data: content = {}, status } = response;
      const { code, resultMessage, data, pagination } = content;
      const { responseType } = config;

      if (Number(code) === 200 || status === 200) {
        return pagination ? { data, pagination } : data;
      }

      if (responseType === 'blob') {
        return response;
      }

      if (code === 401) {
        message.warn('退出登录');
        window.location.href = '/';
      }

      return Promise.reject(new Error(resultMessage));
    },
    err => {
      return Promise.reject(new Error(err.message));
    }
  );
}

const ApiGenerator: ApiGenerator = (config: string) => {
  let url: string = config;
  let method: Method = 'GET';
  const paramsArray = config.split(' ');

  if (paramsArray.length === 2) {
    [method, url] = paramsArray as [Method, string];
  }

  /**
   * @param {payload} 接受参数
   * @param {overrideConfig} request剩余参数
   *  */
  return (payload, overrideConfig) => {
    return request({
      url,
      method,
      [method === 'GET' ? 'params' : 'data']: payload,
      paramsSerializer: params => qs.stringify(params, { indices: false }),
      ...overrideConfig
    });
  };
};

export { ApiGenerator as API };
