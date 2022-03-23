/* eslint-disable no-continue */
import React from 'react'
import { Button } from 'antd'

const Basic = () => {
  // 执行用时： 8280 ms 在所有 JavaScript 提交中击败了 5.01% 的用户
  const fn = (haystack: string, needle: string) => {
    let left = 0
    let right = 0

    if (!needle) {
      return 0
    }

    while (left < haystack.length && right < needle.length) {
      if (right > needle.length) {
        break
      }

      if (haystack[left + right] !== needle[right]) {
        left++
        right = 0
      } else {
        right++
      }
    }

    return right === needle.length ? left : -1
  }

  console.log(fn('mississippi', 'issip'))

  return (
    <Button
      type="link"
      target="_blank"
      href="https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xnr003"
    >
      实现 strStr()
    </Button>
  )
}

export default Basic
