import React, { FC } from 'react';
import { Card } from 'antd';
import { getQueryString } from 'levi-util';

import fetchAllCity from '@/hooks/fetchCity';

const Basic: FC = () => {
  const [loading, city, setCity] = fetchAllCity();

  console.log(getQueryString('name'));

  return (
    <Card style={{ width: '100%' }}>
      <p onClick={setCity}>{`${loading}${JSON.stringify(city)}`}</p>
      <h3>早安，levis，祝你开心每一天！</h3>
      <h4>天气预报说今夜到明天上午有点想你, 预计下午转为持续想你</h4>
      <h4> 受低潮情绪影响 夜晚将转为大到爆想, 心情降低五度 预计此类天气 将持续见到你为止</h4>
    </Card>
  );
};

export default Basic;
