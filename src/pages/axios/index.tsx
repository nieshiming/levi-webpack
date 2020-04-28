import React, { FC, useState } from 'react';
import { Button, List, Typography } from 'antd';
import { getResultList } from '@/apis';

type Props = {
  name: string;
};

const Main: FC<Props> = (props: Props) => {
  const [list, setList] = useState<any[]>([]);

  const handleGetReq = async () => {
    try {
      const data = await getResultList('levis')({}, { responseType: 'json', timeout: 1000 });
      setList(data);
    } catch (err) {
      console.log(err);
      setList([]);
    }
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
            <Typography.Text mark>[name]</Typography.Text> {item.username}
          </List.Item>
        )}
      />
    </div>
  );
};

export default Main;
