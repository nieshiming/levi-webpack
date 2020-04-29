import React, { FC } from 'react';

const Basic: FC = () => {
  const fn = (nums: number[]): number[] => {
    let isCarry = false;

    for (let i = nums.length - 1; i > -1; i--) {
      if (isCarry || i === nums.length - 1) {
        nums[i] = nums[i] + 1;
      }

      if (nums[i] === 10) {
        isCarry = true;
        nums[i] = 0;
      } else {
        isCarry = false;
      }
    }

    if (isCarry) nums.unshift(1);

    return nums;
  };

  const result = fn([9]);
  console.log(result);

  return <>加一</>;
};

export default Basic;

/**
 * @description 加一
 * 
  给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
  最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
  你可以假设除了整数 0 之外，这个整数不会以零开头

  输入: [1,2,3]
  输出: [1,2,4]
  解释: 输入数组表示数字 123

  输入: [4,3,2,1]
  输出: [4,3,2,2]
  解释: 输入数组表示数字 4321。


  @points 注意如果转化成数字： js有最大值限制
  [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
  [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]

  6145390195186705543
 * */
