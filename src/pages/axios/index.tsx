import React, { FC, useState } from 'react';
import { Button, List, Typography, message } from 'antd';
import API from '@/utils/axios';

type Props = {
  name: string;
};

const Main: FC<Props> = (props: Props) => {
  const [list, setList] = useState<any[]>([]);

  const handleGetReq = () => {
    API.post('/mock/login/account')
      .then(res => setList(res.data))
      .catch(err => message.warn(`${err.message}`));
  };

  return (
    <div>
      <Button type="primary" onClick={handleGetReq}>
        {props.name}
      </Button>

      <List
        bordered
        dataSource={list}
        renderItem={item => (
          <List.Item>
            <Typography.Text mark>[ITEM]</Typography.Text> {item.username}
          </List.Item>
        )}
      />
    </div>
  );
};

export default Main;
