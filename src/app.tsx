import React from 'react';
import { hot } from 'react-hot-loader/root';
import styled from 'styled-components';
import { Card, Button, Rate } from 'antd';
import { newLists } from '@/config';
import { shop } from 'enums/index';

const Bold = styled.div`
  color: red;
`;

const Child = () => {
  return (
    <Card title="home">
      <Button type="primary">Primary</Button>
      <br />
      {JSON.stringify(shop)}
      <Rate allowHalf defaultValue={2.5} />

      {newLists.map(item => (
        <Bold key={item}>{item}</Bold>
      ))}
    </Card>
  );
};

export default hot(Child);
