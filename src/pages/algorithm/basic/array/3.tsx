import React, { FC } from 'react';
import { Card } from 'antd';

const Basic: FC = () => {
  /**
   * @description 数组自带方法
   * */
  const fn = (nums: number[]): number => {
    if (nums.length === 0) return -1;

    const max = Math.max.apply(null, nums);
    const idx = nums.findIndex(item => item === max);
    const flag = nums.every((item, index) => {
      return idx === index ? true : max >= 2 * item;
    });
    return flag ? idx : -1;
  };

  /*
   * @description 原生求解
   * */
  const fn2 = (nums: number[]): number => {
    if (nums.length === 0) return -1;
    let max = -1,
      secMax = -1,
      idx = 0;
    for (let i = 0; i < nums.length; i++) {
      /** 交换值 */
      if (nums[i] > max) {
        secMax = max;
        max = nums[i];
        idx = i;
      }

      /** 取第二大的值 */
      if (nums[i] > secMax && nums[i] !== max) secMax = nums[i];
    }

    return max >= 2 * secMax ? idx : -1;
  };

  const result = fn2([0, 0, 2, 3]);
  console.log(result);
  console.log(fn);

  return <Card>至少是其他数组两倍的最大树</Card>;
};

export default Basic;

/**
 * @description 至少是其他数组两倍的最大树
 *
  在一个给定的数组nums中，总是存在一个最大元素 。
  查找数组中的最大元素是否至少是数组中每个其他数字的两倍。
  如果是，则返回最大元素的索引，否则返回-1。
  
  输入: nums = [3, 6, 1, 0]
  输出: 1
  解释: 6是最大的整数, 对于数组中的其他整数,
  6大于数组中其他元素的两倍。6的索引是1, 所以我们返回1.
 * */
