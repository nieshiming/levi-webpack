import React, { FC } from 'react';
import { Card } from 'antd';

/**
 * @description 函数
 * */
const Fn: FC = () => {
  return <Card>函数类型</Card>;
};

/** 接口定义函数类型 */
interface I {
  (name: string, age?: number): boolean;
}

const levia: (name: string, age?: number) => boolean = (
  name: string,
  age: number = 18
): boolean => {
  console.log(name, age);
  return !!name;
};

/** 使用接口 */
const levib: I = (name: string = 'levis', age?: number): boolean => {
  console.log(name, age);
  return false;
};

/** 剩余参数 */
function show(name: string, age: number, ...reset: string[]): void {
  console.log(name, age, ...reset);
}

console.log(levia, levib, show);

export default Fn;
