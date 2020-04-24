import axios from 'axios';

const instance = axios.create({
  timeout: 60000,
  headers: {
    signature: 'levi site'
  }
});

instance.interceptors.request.use(
  config => config,
  err => Promise.reject(err)
);

instance.interceptors.response.use(
  response => {
    const { status, data } = response;
    if (status === 2001) {
      return data;
    }

    return Promise.reject({
      message: '请求出错啦'
    });
  },
  err => Promise.reject(err)
);

export default instance;
