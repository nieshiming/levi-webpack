import React, { FC, useState, useMemo } from 'react';
import { Card, Button } from 'antd';

const Basic: FC = () => {
  const [num, setNum] = useState(1);

  /**
   * @description 返回jsx直接渲染界面
   * */
  const Content = useMemo(() => <div>useMemo{num}</div>, [num]);

  /**
   * @description 返回函数
   * */
  const showMsg = useMemo(() => console.log, []);

  return (
    <Card>
      {Content}
      {showMsg()}
      <h4>{num}</h4>
      <Button type="ghost" onClick={() => setNum(num + 1)}>
        add
      </Button>
    </Card>
  );
};

export default Basic;

/**
 * @description useMemo
 * 1、把“创建”函数和依赖项数组作为参数传入 useMemo，它仅会在某个依赖项改变时才重新计算 memoized 值。这种优化有助于避免在每次渲染时都进行高开销的计算
 * 2、传入 useMemo 的函数会在渲染期间执行。请不要在这个函数内部执行与渲染无关的操作，诸如副作用这类的操作属于 useEffect 的适用范畴，而不是 useMemo
 * 3、如果没有提供依赖项数组，useMemo 在每次渲染时都会计算新的值。
 * */
