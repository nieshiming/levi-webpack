import React from 'react';

export default class One extends React.PureComponent {
  componentDidMount() {
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    const result = this.fn2(nums);
    console.log(nums, result);
  }

  /**
   * @description 删除数组中重复的值
   * splice 方法会改变原数组
   * */
  fn = (nums: number[]) => {
    for (let i = 0; i < nums.length; i++) {
      if (nums.indexOf(nums[i]) !== i) {
        nums.splice(i, 1);
        i--; // 删除后下降一格
      }
    }

    return nums.length;
  };

  /**
   * @description 核心思想  移动元素  i 只会 >= len
   * 开始预设一个指针，遇到不相等值，拿当前这个值替换调
   * */
  fn2 = (nums: number[]) => {
    if (!nums.length) {
      return 0;
    }

    let len = 1;
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] !== nums[i - 1]) {
        /** 相当于执行  nums[len] = nums[i] len++ */
        nums[len++] = nums[i];
      }
    }

    return len;
  };

  render() {
    return <>从排序数组中删除重复项，</>;
  }
}
