import { Button } from 'antd'
import React, { FC } from 'react'

const Basic: FC = () => {
  // 完成多笔
  const fn = (nums: number[]): number => {
    let count = 0

    for (let i = 0; i < nums.length; i++) {
      if (nums[i + 1] >= nums[i]) {
        count += nums[i + 1] - nums[i]
      }
    }

    return count
  }

  // 完成一笔
  const singleMethod = (nums: number[]) => {
    let minCount = nums[0]
    let res = 0

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] < minCount) {
        minCount = nums[i]
      } else {
        res = Math.max(res, nums[i] - minCount)
      }
    }

    return res
  }

  // 完成一笔 => 动态规划
  const dynamic = (nums: number) => {
    let temp = 0
    let result = 0

    for (let i = 1; i < nums.length; i++) {
      temp += nums[i] - nums[i - 1]

      /**
       * @desc
       *
       *  股票真正含义是累计每天盈利+亏损合计
       *  如果累计到负数，其实没有意义。 temp重置为0，并且保留之前最大数result， 取新的一段 开始计算，
       * */
      if (temp < 0) {
        temp = 0
      }

      if (temp > result) {
        result = temp
      }
    }

    return result
  }

  console.log(fn([7, 1, 5, 3, 6, 4]))
  console.log(singleMethod([7, 2, 5, 1, 4, 3, 6, 4]))
  console.log(dynamic([7, 2, 5, 1, 4, 3, 6, 4]))

  return (
    <Button
      type="link"
      target="_blank"
      href="https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/x2zsx1/"
    >
      买卖股票的最佳时机
    </Button>
  )
}

export default Basic

/**
 * @description 买卖股票的最佳时机
 * 
  给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
  设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
  注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

  @description
    输入: [7,1,5,3,6,4]
    输出: 7
    解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
        随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 。


  @description 
    输入: [1,2,3,4,5]
    输出: 4
    解释: 在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
        注意你不能在第 1 天和第 2 天接连购买股票，之后再将它们卖出。
        因为这样属于同时参与了多笔交易，你必须在再次购买前出售掉之前的股票。


  @description 
    输入: [7,6,4,3,1]
    输出: 0
    解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
 * */
