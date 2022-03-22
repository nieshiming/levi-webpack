import { Button } from 'antd'
import React, { FC } from 'react'

const Basic: FC = () => {
  const fn = (nums: number[]): boolean => nums.length !== new Set(nums).size

  const fn2 = (nums: number[]): boolean => {
    for (let i = 0; i < nums.length; i++) {
      if (nums.lastIndexOf(nums[i]) !== i) {
        return true
      }
    }

    return false
  }

  const fn3 = (nums: number[]): boolean => {
    for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums.length; j++) {
        if (i !== j && nums[i] === nums[j]) {
          return true
        }
      }
    }

    return false
  }

  console.log(fn([1, 2, 3, 1]))
  console.log(fn2([1, 2, 3, 1]))
  console.log(fn3([1, 2, 3, 1]))

  return (
    <Button
      type="link"
      target="_blank"
      href="https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/x248f5/"
    >
      存在重复
    </Button>
  )
}

export default Basic

/**
 * @description 存在重复
 * 
  给定一个整数数组，判断是否存在重复元素
  如果任何值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回 false。 

  输入: [1,2,3,1]
  输出: true

  输入: [1,2,3,4]
  输出: false

  输入: [1,1,1,3,3,4,3,2,4,2]
  输出: true
 * */
