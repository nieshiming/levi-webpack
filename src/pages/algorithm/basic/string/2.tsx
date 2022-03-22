/* eslint-disable no-param-reassign */
import React from 'react'
import { Button } from 'antd'

const Basic = () => {
  // 循坏遍历
  const fn = (x: number) => {
    let res = 0
    // eslint-disable-next-line no-restricted-properties
    const MAX_VALUE = Math.pow(2, 31) - 1
    const MIN_VALUE = MAX_VALUE * -1

    while (x !== 0) {
      res = res * 10 + parseInt(x % 10, 10)

      if (res > MAX_VALUE || res < MIN_VALUE) return 0

      x = parseInt(x / 10, 10)
    }

    console.log(res)
    return res
  }

  fn(321)

  return (
    <Button
      type="link"
      target="_blank"
      href="https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xnx13t"
    >
      整数反转
    </Button>
  )
}

export default Basic
