import React from 'react'
import { Button } from 'antd'

export default () => {
  const fn = (nums: number[], target: number) => {
    for (let i = 0; i < nums.length - 1; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
          return [i, j]
        }
      }
    }

    return []

    const mapRes = new Map([])

    for (let i = 0; i < nums.length; i++) {
      const temp = target - nums[i]

      if (!mapRes.has(nums[i])) {
        mapRes.set(temp, i)
      } else {
        return [mapRes.get(nums[i]), i]
      }
    }

    return []
  }

  console.log(fn([2, 7, 11, 15], 9))

  return (
    <Button
      type="link"
      target="_blank"
      href="https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/x2jrse/"
    >
      两数之和
    </Button>
  )
}
