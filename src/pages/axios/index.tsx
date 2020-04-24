import React, { FC } from 'react';
import { Button } from 'antd';
import axios from 'axios';

type Props = {
  name: string;
};

const Main: FC<Props> = (props: Props) => {
  const handleGetReq = () => {
    axios.get('/douban/v2/movie/us_box').then(res => console.log(res));
  };

  return (
    <div>
      <Button type="primary" onClick={handleGetReq}>
        {props.name}
      </Button>
    </div>
  );
};

export default Main;
