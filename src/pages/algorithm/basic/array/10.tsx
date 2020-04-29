import React, { FC } from 'react';
import { Row, Button } from 'antd';

const Baisc: FC = () => {
  /** reduce
   *
   * [].concat([1,2,3,4]) === [1,2,3,4]
   * [].concat(1,2) = [1,2]
   */
  const reduceFn = (nums: any[]): number[] => {
    return nums.reduce((pre, cur) => pre.concat(Array.isArray(cur) ? reduceFn(cur) : cur), []);
  };

  /** toString 针对number[] */
  const toStringFn = (nums: any[]): number[] => {
    return nums
      .toString()
      .split(',')
      .map(item => +item);
  };

  /** 正则表达式 替换全部[ ] 注意正则表达式*/
  const regFn = (nums: any[]): number[] => {
    return JSON.parse(`[${JSON.stringify(nums).replace(/\[|]/g, '')}]`);
  };

  /**
   * @description concat 语法
   * 利用map函数递归遍历
   *
   * 重点是将返回的数组打平
   * @points Array.prototype.concat.apply([], [xxx])
   */
  const concatFn = (nums: any[]): number[] => {
    return Array.isArray(nums) ? Array.prototype.concat.apply([], nums.map(concatFn)) : nums;
  };

  const arr = [1, [2, 3], 4, [[5, 6], 7]];

  return (
    <Row gutter={20} justify="start">
      {/* <Button type="link" onClick={() => console.log(arr.flat(4))}>
        Array.flat
      </Button> */}
      <Button type="link" onClick={() => console.log(reduceFn(arr))}>
        reduce
      </Button>
      <Button type="link" onClick={() => console.log(toStringFn(arr))}>
        toString
      </Button>
      <Button type="link" onClick={() => console.log(regFn(arr))}>
        正则
      </Button>
      <Button type="link" onClick={() => console.log(concatFn(arr))}>
        concat
      </Button>
    </Row>
  );
};

export default Baisc;
