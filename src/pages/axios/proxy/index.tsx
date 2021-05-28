import React from 'react';
import { getProxyData, getMovieList } from '@/apis';
import { Card, Row, Col, Button, message } from 'antd';

/**
 * 
  const qs = require('qs')
  const http = require('http')

  http
    .createServer((req, res) => {
      const [path, query] = req.url.split('?')
      const params = qs.parse(query, { ignoreQueryPrefix: true })
      res.writeHead(200, { 'Content-Type': 'text/javascript' })
      setTimeout(() => {
        res.end(
          `${params.callback}(${JSON.stringify({
            path,
            name: params.name,
            date: params.date,
          })})`
        )
      }, 3000)
    })
    .listen(8081)

  console.log('http serve running at 8081')

 * */

const Jsonp = async (
  request: { params: object; callback: string; url: string },
  timeout: number = 2000
) => {
  return new Promise((resolve, reject) => {
    const { url, params, callback } = request;
    const method = `${callback}_${Date.now()}`;

    let src: string = url.indexOf('?') > -1 ? url : `${url}?`;
    for (let key in params) {
      src += `&${key}=${params[key]}`;
    }

    const script = document.createElement('script');
    script.setAttribute('src', `${src}&callback=${encodeURIComponent(method)}`);
    document.body.appendChild(script);

    const clean = () => {
      clearTimeout(timer);
      delete window[method];
      document.body.removeChild(script);
    };

    const timer = setTimeout(() => {
      clean();
      reject('timeout 超时啦');
    }, timeout);

    window[method] = data => {
      clean();
      resolve(data);
    };

    script.addEventListener('error', () => {
      clean();
      reject('资源加载失败');
    });
  });
};

const initState = {};
type State = Readonly<typeof initState>;

class Baisc extends React.Component<{}, State> {
  readonly state = initState;

  apigetProxyData = async () => {
    try {
      const { data } = await getProxyData();
      console.log(data);
    } catch (e) {}
  };

  getMovieList = async () => {
    try {
      const res = await getMovieList();
      console.log(res);
    } catch (e) {}
  };

  onMockJsonpRequest = async () => {
    try {
      const result = await Jsonp({
        params: { name: 'levi', date: Date.now() },
        callback: 'callback',
        url: 'http://10.180.21.95:8081'
      });
      console.log(result);
    } catch (err) {
      message.warning(err);
    }
  };

  render() {
    return (
      <Card>
        <Row justify="start" gutter={20}>
          <Col>
            <Button type="primary" onClick={this.onMockJsonpRequest}>
              nodejs数据
            </Button>
          </Col>
          <Col>
            <Button type="primary" onClick={this.apigetProxyData}>
              启动代理数据
            </Button>
          </Col>
          <Col>
            <Button type="ghost" onClick={this.getMovieList}>
              北美票房榜
            </Button>
          </Col>
        </Row>
      </Card>
    );
  }
}

export default Baisc;
