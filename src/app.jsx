import React from 'react';
import { hot } from 'react-hot-loader/root';
import styled from 'styled-components';
import { Card, Button, Rate } from 'antd';

const Bold = styled.div`
  color: red;
`;

const lists = ['jack', 'levi', 'mary'];

const Child = function () {
  return (
    <Card title="home">
      <Button type="primary">Primary</Button>
      <br />
      <Rate allowHalf defaultValue={2.5} />

      {lists.map(item => (
        <Bold key={item}>{item}</Bold>
      ))}
    </Card>
  );
};

export default hot(Child);
