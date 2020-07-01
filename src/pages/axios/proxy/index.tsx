import React from 'react';
import { Card, Row, Col, Button } from 'antd';
import { getProxyData, getMovieList } from '@/apis';

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

  render() {
    return (
      <Card>
        <Row justify="start" gutter={20}>
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
