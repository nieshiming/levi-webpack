import React, { FC, useState, useCallback } from 'react';
import { Card, Button, message } from 'antd';

const Basic: FC = () => {
  const [num, setNum] = useState(1);

  /**
   * @description 执行函数
   * */

  const showMsg = useCallback(() => {
    message.warn(num);
  }, [num]);

  /**
   * @description 执行jsx
   * */
  const showContent = useCallback(() => <div>levis:{num}</div>, [num]);

  return (
    <Card>
      {showContent()}
      <h4>{num}</h4>
      <Button type="primary" onClick={showMsg}>
        show msg
      </Button>
      <Button type="ghost" onClick={() => setNum(num + 1)}>
        add
      </Button>
    </Card>
  );
};

export default Basic;

/**
 * @description useCallback
 * 1、返回一个记忆版的回调函数
 * 2、把内联回调函数及依赖项数组作为参数传入 useCallback，它将返回该回调函数的 memoized 版本，该回调函数仅在某个依赖项改变时才会更新。
 *
 * 3、useCallback(fn, deps) ==== useMemo(() => fn, deps);
 *
 * @description useCallback(fn. deps) ===> 最终返回的结果函数fn,并且fn随着deps动态更新
 * @description useMemo(() => fn, deps) ===> 返回函数fn， 并且fn随着deps动态更新
 *
 * @points 依赖项不会作为参数传给回调函数
 * */
