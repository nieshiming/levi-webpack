import React from 'react';
import { Card, Row, Col, Button, message } from 'antd';
import { mockGet, mockPost, mockPut, mockDelete } from '@/apis';

const initState = {};
type State = Readonly<typeof initState>;

class Baisc extends React.Component<{}, State> {
  readonly state = initState;

  apiGet = async () => {
    try {
      const data = await mockGet();
      message.success(`${JSON.stringify(data)}`);
      console.log(data);
    } catch (e) {}
  };

  apiPost = async () => {
    try {
      const { data } = await mockPost({ name: 'levi', age: 20 });
      console.log(data);
    } catch (e) {}
  };

  apiPut = async () => {
    try {
      const { data } = await mockPut();
      console.log(data);
    } catch (e) {}
  };

  apiDelete = async () => {
    try {
      const { data } = await mockDelete();
      console.log(data);
    } catch (e) {}
  };

  render() {
    return (
      <Card>
        <Row gutter={20} justify="start">
          <Col>
            <Button type="primary" onClick={this.apiGet}>
              GET
            </Button>
          </Col>
          <Col>
            <Button type="primary" onClick={this.apiPost}>
              POST
            </Button>
          </Col>
          <Col>
            <Button type="primary" onClick={this.apiPut}>
              PUT
            </Button>
          </Col>
          <Col>
            <Button type="primary" onClick={this.apiDelete}>
              DELETE
            </Button>
          </Col>
        </Row>
      </Card>
    );
  }
}

export default Baisc;
