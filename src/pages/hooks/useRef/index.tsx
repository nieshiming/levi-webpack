import React, { FC, useRef, useCallback, useState, useEffect } from 'react';
import { Card, Button, message } from 'antd';

let name = 111;

/**
 * @description useEffect 里面执行的副作用，在视图更新之后再执行
 * */
const EventRef = () => {
  const [count, setCount] = useState<number>(0);
  const refs = useRef<number>(0);

  console.log(1);

  useEffect(() => {
    console.log('view update');
    refs.current = count;
    name = name + 1;
  });
  console.log(2);

  return (
    <>
      <p>pref count:{refs.current}</p>
      <p>current count: {count}</p>
      <p>name: {name}</p>
      <Button type="primary" onClick={() => setCount(count + 1)}>
        click
      </Button>
    </>
  );
};

console.log(EventRef);

const Basic: FC = () => {
  const myRef = useRef();
  const childRef = useRef<Child>();
  const { current: users } = useRef({ name: 'levi' }); // 创建ref对象

  const showRef = useCallback(() => {
    console.log(myRef.current);
    childRef.current.show();
  }, []);

  return (
    <Card>
      <h4 ref={myRef}>111</h4>
      <h4>{JSON.stringify(users)}</h4>
      <Child ref={childRef} />
      <Button onClick={showRef} type="ghost">
        打印ref
      </Button>
    </Card>
  );
};

class Child extends React.Component<{}, {}> {
  show = () => {
    message.success('child method');
  };

  render() {
    return <div>i am child</div>;
  }
}

export default Basic;

/**
 * @description useRef 返回一个可变的ref对象
 *
 * 返回ref在整个生命周期内保持不变
 * */
