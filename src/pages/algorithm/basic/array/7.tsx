import { Button } from 'antd'
import React, { FC } from 'react'

const Basic: FC = () => {
  /**
   * 解题思路
   *
   * 把数组后面K个数字放在数组最前面, 去掉循坏次数， 取余数
   * */
  const fn = (nums: number[], k: number) => {
    nums.unshift(...nums.splice(-(k % nums.length)))
    return nums
  }

  console.log(fn([1, 2], 5))

  return (
    <Button
      type="link"
      target="_blank"
      href="https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/x2skh7/"
    >
      旋转数组
    </Button>
  )
}

export default Basic

/**
 * @description 旋转数组
 * 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

  输入: [1,2,3,4,5,6,7] 和 k = 3
  输出: [5,6,7,1,2,3,4]
  解释:
  向右旋转 1 步: [7,1,2,3,4,5,6]
  向右旋转 2 步: [6,7,1,2,3,4,5]
  向右旋转 3 步: [5,6,7,1,2,3,4]

  输入: [-1,-100,3,99] 和 k = 2
  输出: [3,99,-1,-100]
  解释: 
  向右旋转 1 步: [99,-1,-100,3]
  向右旋转 2 步: [3,99,-1,-100]

  输入: [1, 2] 和 k = 5
  输出: [2, 1]

  说明:
  尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
  要求使用空间复杂度为 O(1) 的 原地 算法。
 * */
