import React, { FC } from 'react';
import { Card } from 'antd';

/**
 * @description 基本类型
 * */
const Base: FC<{}> = () => {
  const a: string = 'a';
  const b: number = 12;
  const c: string[] = ['a', 'c', 'd'];

  /** 在 strictNullChecks模式下 null 一级 undefined只能被自身赋值*/
  const d: null = null;
  const f: undefined = undefined;

  /** 元祖可以指定不同的类型的合成数组 */
  const g: [string, number] = ['a', 1];

  const obj: Object = { name: 123 };

  /** any类型可以赋值任何数据类型 */
  // const anys: any = 'xxx';.

  /** void 不返回任何数组 */
  const fn = (): void => {
    console.log('test void');
  };

  /** never一般用于报错 */
  const fns = (): never => {
    throw new Error('some erors');
  };

  console.log(fn, fns);

  /**
   * @description 类型断言
   * 1、根据现有的值推断该数据的类型
   */
  const nums: any = 'sdsdsds';
  const n1 = (nums as string).split('');

  return (
    <Card title="基本类型">
      <h4>string{a}</h4>
      <h4>number：{b}</h4>
      <h4>array: {c}</h4>
      <h4>null: {`${d}`}</h4>
      <h4>undefined: {`${f}`}</h4>
      <h4>元祖： {g}</h4>
      <h4>object:{JSON.stringify(obj)}</h4>
      <h4>类型断言：{n1}</h4>
    </Card>
  );
};

export default Base;
