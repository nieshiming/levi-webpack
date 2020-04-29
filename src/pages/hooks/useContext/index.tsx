import React, { FC, useState, useContext, createContext } from 'react';
import { Card, Button } from 'antd';

const nieObj = {
  name: 'levi',
  age: 20
};
const nieContext = createContext(nieObj);

const Basic: FC = () => {
  const levi = useContext(nieContext);
  return (
    <Card>
      <h4>name: {levi.name}</h4>
      <h4>age: {levi.age}</h4>
    </Card>
  );
};

const Parent: FC = () => {
  const [nieInfo, setNieInfo] = useState(nieObj);

  return (
    <nieContext.Provider value={nieInfo}>
      <Basic />
      <div>
        <Button
          type="danger"
          onClick={() => setNieInfo(Object.assign({}, nieInfo, { age: nieInfo.age + 1 }))}
        >
          update
        </Button>
      </div>
    </nieContext.Provider>
  );
};

export default Parent;

/**
 * @description useContext
 * 1、接受一个context对象(react.createContext的返回值),并返回该context的当前值
 * 2、当前context的值是由上层中离组件最新的<MyContext.Provider>value props决定
 * 3、当离组件上层最近的<My.Context.provider>更新是，该Hook也会触发重新渲染，并使用最新的
 *    MyContext.Provider的context  value 的值
 *
 *
 * 别忘记 useContext 的参数必须是 context 对象本身
 * @@@ 正确： useContext(MyContext)
 * @@@ 错误： useContext(MyContext.Consumer)
 * @@@ 错误： useContext(MyContext.Provider)
 *
 *
 * @point useContext(MyContext) 只是让你能够读取 context 的值以及订阅 context 的变化。
 *        你仍然需要在上层组件树中使用 <MyContext.Provider> 来为下层组件提供 context
 *
 *
 * @description Context 设计目的是为了共享那些对于一个组件树而言是“全局”的数据
 *
 * @poinit  React.createContext => https://zh-hans.reactjs.org/docs/context.html
 * */
