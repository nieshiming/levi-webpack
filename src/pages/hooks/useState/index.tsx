import React, { FC, useState, useCallback } from 'react';
import { Card, Button } from 'antd';

const Basic: FC = () => {
  const [num, setNum] = useState(() => 22222); // 基本类型
  const [arr, setArr] = useState([3]);

  const arrFn = useCallback(
    (nums: number) => {
      arr.push(nums);
      setArr(Object.assign([], arr));
      // setArr([...arr])
    },
    [arr, setArr]
  ); // 传入[]只会在初始化的时候执行

  return (
    <Card>
      <h4>{num}</h4>
      <h4>{arr}</h4>
      <Button type="primary" onClick={() => setNum(num + 1)}>
        点击 = 基本类型
      </Button>
      <Button type="danger" onClick={() => arrFn(4)}>
        点击 = 引用类型
      </Button>
    </Card>
  );
};

export default Basic;

/**
 * @description useState
 * 1、返回一个state以及更新state的函数, initState初始值
 * const [num, setNum] = useState(initState)
 *
 * 2、在后续的渲染中，useState返回的第一个值是始终是更新后的state
 *
 * 3、setState可以通过先前的state计算得出，setState可以接受一个函数，该函数的参数是之前的state
    setArr(arg => {
      arg.push(num);
      return [...arg];
    });

 * 4、useState不会自动的合并更新对象，可以采用下面2中方式更新对象
 *   @ {...xxx}
 *   @ Object.assign({}, xxx);
 * 
 * 5、initState参数只在初始化的时候用到，后续渲染会忽略，如果state需要通过复杂计算可以传入一个函数，然后返回值
 *    这个返回值就是初始化state
 *   const [levi, setLevi] = useState(() => 222)
 * */
