import React, { FC, useState } from 'react';
import { Button, List, Typography } from 'antd';

type Props = {
  name: string;
};

const Main: FC<Props> = (props: Props) => {
  const [list, setList] = useState<any[]>([]);

  const handleGetReq = async () => {
    console.log(1);
    setList([]);
    import('@/apis').then(res => console.log(res));
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
