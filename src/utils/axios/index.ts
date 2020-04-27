import axios from 'axios';

const instance = axios.create({
  timeout: 60000,
  headers: {
    Pragma: 'no-cache',
    Accept: 'application/json',
    'Cache-Control': 'no-cache, no-store, must-revalidate'
  }
});

instance.interceptors.request.use(
  config => config,
  err => Promise.reject(err)
);

instance.interceptors.response.use(
  response => {
    const { status, data } = response;

    if (status === 200) {
      return data;
    }

    return Promise.reject({
      message: '请求出错啦'
    });
  },
  err => Promise.reject(err)
);

export default instance;
