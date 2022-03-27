/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/naming-convention */
import { Button } from 'antd'
import React, { FC } from 'react'

const Basic: FC = () => {
  // 动态规划
  const maxSubArray = (nums) => {
    const deps = []
    deps[0] = nums[0]
    let result = nums[0]

    for (let i = 1; i < nums.length; i++) {
      deps[i] = Math.max(deps[i - 1] + nums[i], nums[i])
      result = Math.max(result, deps[i])
    }

    return result
  }

  // 贪心算法
  const maxSubArray2 = (nums) => {
    let result = -Infinity
    let sum = 0

    for (let i = 0; i < nums.length; i++) {
      sum += nums[i]
      result = Math.max(result, sum)

      if (sum < 0) {
        sum = 0
      }
    }

    return result
  }

  console.log(maxSubArray, maxSubArray2)

  return (
    <Button
      type="link"
      target="_blank"
      href="https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xn3cg3/"
    >
      最大子序和
    </Button>
  )
}

export default Basic
