import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Card } from 'antd';
import AxiosDemo from '@/pages/axios';

const Child = () => {
  return (
    <Card title="home">
      <AxiosDemo name="axios" />
    </Card>
  );
};

export default hot(Child);
