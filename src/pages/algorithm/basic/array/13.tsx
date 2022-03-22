/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { Button } from 'antd'

export default () => {
  /**
   * @description
   *
   * 终极思想，一次遍历数组每个非0的数字，提取到最前面<交换法则>
   * */
  const fn = (nums: number[]) => {
    let idx = 0
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
        const temp = nums[idx]
        nums[idx] = nums[i]
        nums[i] = temp
        idx++
      }
    }

    return nums
  }

  console.log(fn([0, 1, 0, 3, 12]))

  return (
    <Button
      type="link"
      target="_blank"
      href="https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/x2ba4i/"
    >
      移动零
    </Button>
  )
}
