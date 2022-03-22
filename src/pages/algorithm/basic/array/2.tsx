import { Button } from 'antd'
import React, { FC } from 'react'

const basic: FC = () => {
  /**
   * @description 改进版本 70ms
   */
  const fn = (nums: number[]) => {
    let leftSum = 0
    const sum = nums.reduce((prev, cur) => prev + cur)

    for (let i = 0; i < nums.length; i++) {
      if (leftSum * 2 + nums[i] === sum) {
        return i
      }

      leftSum += nums[i]
    }

    return -1
  }

  console.log(fn([-1, -1, 0, 0, -1, -1]))

  return (
    <Button href="https://leetcode-cn.com/problems/find-pivot-index/" type="link" target="_blank">
      寻找中心索引
    </Button>
  )
}

export default basic

/**
 * @description 我们是这样定义数组中心索引的：数组中心索引的左侧所有元素相加的和等于右侧所有元素相加的和。
 * */
