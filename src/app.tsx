import React from 'react';
import { hot } from 'react-hot-loader/root';
import styled from 'styled-components';
import { Card, Button, Rate } from 'antd';
import { shop } from './enum';

const Bold = styled.div`
  color: red;
`;

new Promise(resolve => resolve(2));

const newLists = ['jack', 'levi', 'mary'];
console.log(shop);

const Child = function () {
  return (
    <Card title="home">
      <Button type="primary">Primary</Button>
      <br />
      <Rate allowHalf defaultValue={2.5} />

      {newLists.map(item => (
        <Bold key={item}>{item}</Bold>
      ))}
    </Card>
  );
};

export default hot(Child);
