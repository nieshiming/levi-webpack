import React from 'react'
import { Button } from 'antd'

const Basic = () => {
  // 循坏遍历
  const fn = (str: string) => {
    const map = new Map()
    for (let i = 0; i < str.length; i++) {
      if (!map.get(str[i])) {
        map.set(str[i], 1)
      } else {
        map.set(str[i], map.get(str[i]) + 1)
      }
    }

    for (let i = 0; i < str.length; i++) {
      if (map.get(str[i]) === 1) {
        return i
      }
    }

    return -1
  }

  console.log(fn('lleetcode'))

  return (
    <Button
      type="link"
      target="_blank"
      href="https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xn5z8r"
    >
      字符串中的第一个唯一字符
    </Button>
  )
}

export default Basic
