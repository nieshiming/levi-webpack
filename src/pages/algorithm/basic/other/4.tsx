/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/naming-convention */
import { Button } from 'antd'
import React, { FC } from 'react'

const Basic: FC = () => {
  const maxProfit = (prices) => {
    let count = 0
    let minIdx = 0

    for (let i = 0; i < prices.length; i++) {
      // 计算最大金额差
      const money = prices[i] - prices[minIdx]
      if (money > count) {
        count = money
      } else if (prices[i] < prices[minIdx]) {
        // 找出当天最小金额
        minIdx = i
      }
    }

    return count
  }

  console.log(maxProfit)

  return (
    <Button
      type="link"
      target="_blank"
      href="https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xn8fsh/"
    >
      买卖股票的最佳时机
    </Button>
  )
}

export default Basic
