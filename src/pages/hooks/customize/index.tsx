import React, { FC, useCallback } from 'react';
import { Card, Button } from 'antd';
import { useDocumentTitle, useNums } from './demo';

const Basic: FC = () => {
  const [setTitles] = useDocumentTitle('nsm ');
  const { num, setNumMethods } = useNums(0);

  const changeTitle = useCallback(() => {
    setTitles('levis');
  }, [setTitles]);

  return (
    <Card>
      <Button type="ghost" onClick={changeTitle}>
        更改title
      </Button>

      <p>{num}</p>
      <Button type="primary" onClick={() => setNumMethods(num + 1)}>
        更改num
      </Button>
    </Card>
  );
};

export default Basic;

/**
 * 订阅自定义hooks，暴露出方法以及只，引用的hooks更新后，父组件同样因为闭包也会更新值
 * */
