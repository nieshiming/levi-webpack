/* eslint-disable no-continue */
import React from 'react'
import { Button } from 'antd'

const Basic = () => {
  const isLetter = function isLetter(str) {
    const chatCode = str.charCodeAt(0)
    return (
      (chatCode >= 65 && chatCode <= 90) || (chatCode >= 97 && chatCode <= 122) || (chatCode >= 48 && chatCode <= 57)
    )
  }

  const fn = (s: string) => {
    let isPalindrome = true
    let left = 0
    let right = s.length - 1

    while (left < right) {
      if (!isLetter(s[left])) {
        left++
        continue
      }
      if (!isLetter(s[right])) {
        right--
        continue
      }

      if (s[left].toLowerCase() !== s[right].toLowerCase()) {
        isPalindrome = false
        break
      } else {
        left++
        right--
      }
    }

    return isPalindrome
  }

  console.log(fn('OP'))

  return (
    <Button
      type="link"
      target="_blank"
      href="https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xne8id"
    >
      验证回文串
    </Button>
  )
}

export default Basic
