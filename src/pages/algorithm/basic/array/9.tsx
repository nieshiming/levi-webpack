import { Button } from 'antd'
import React, { FC } from 'react'

const Baisc: FC = () => {
  const fn = (nums: number[]): boolean => {
    nums.sort()

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === nums[i + 1]) {
        i++
      } else {
        return nums[i]
      }
    }

    return null
  }

  console.log(fn([4, 1, 2, 1, 2]))
  return (
    <Button
      type="link"
      target="_blank"
      href="https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/x21ib6/"
    >
      链接
    </Button>
  )
}

export default Baisc

/**
 * @description 只出现一次的数字
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 *

  说明：
  你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

  @points 
  输入: [2,2,1]
  输出: 1

  @points
  1 1 2 2 4
  输入: [4,1,2,1,2]
  输出: 4
 * */
