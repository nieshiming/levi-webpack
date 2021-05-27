import React from 'react';
import { Card, Row, Col, Button } from 'antd';
import { getProxyData, getMovieList } from '@/apis';

/**
 * 
 const qs = require('qs')
  const http = require('http')
  http
    .createServer((req, res) => {
      const [path, query] = req.url.split('?')
      const params = qs.parse(query, { ignoreQueryPrefix: true })
      console.log(path)
      res.writeHead(200, { 'Content-Type': 'text/javascript' })
      setTimeout(() => {
        res.end(
          `${params.callback}(${JSON.stringify({
            path,
            name: params.name,
            date: params.date,
          })})`
        )
      }, 1000)
    })
    .listen(8081)

  console.log('http serve running at 8081')
 * */

const Jsonp = async (request: { params: object; callback: string }) => {
  return new Promise((resolve, reject) => {
    const { params, callback } = request;
    const method = `${callback}_${Date.now()}`;
    window[method] = data => {
      resolve(data);
      document.body.removeChild(script);
      delete window[method];
    };

    const script = document.createElement('script');
    const req = `name=${params.name}&date=${params.date}&callback=${method}`;
    script.setAttribute('src', `http://10.180.21.95:8081?${req}`);
    document.body.appendChild(script);
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
    const result = await Jsonp({
      params: { name: 'levi', date: Date.now() },
      callback: 'callback'
    });
    console.log(result);
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
