/* eslint-disable no-var */
/* eslint-disable no-param-reassign */
import React from 'react'
import { Button } from 'antd'

const Basic = () => {
  // 使用栈
  const isPalindrome = (head) => {
    const arr = []
    let node = head
    while (node) {
      arr.push(node)
      node = node.next
    }

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].val !== arr[arr.length - 1 - i].val) {
        return false
      }
    }

    return true
  }

  console.log(isPalindrome)

  return (
    <Button
      type="link"
      target="_blank"
      href="https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xnv1oc"
    >
      回文链表
    </Button>
  )
}

export default Basic
