/* eslint-disable no-continue */
import React from 'react'
import { Button } from 'antd'

const Basic = () => {
  const fn = (str: string) => {
    const reg = /^[' ']*[-|+]{0,1}[0-9]+/
    const matched = str.match(reg)
    const res = matched ? matched[0] * 1 : 0

    const MAX_VALUE = 2 ** 31 - 1
    const MIN_VALUE = -MAX_VALUE - 1

    if (res > MAX_VALUE) {
      return MAX_VALUE
    }

    if (res < MIN_VALUE) {
      return MIN_VALUE
    }

    return res
  }

  console.log(fn('mississippi'))

  return (
    <Button
      type="link"
      target="_blank"
      href="https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xnoilh"
    >
      字符串转换整数 (atoi)
    </Button>
  )
}

export default Basic
