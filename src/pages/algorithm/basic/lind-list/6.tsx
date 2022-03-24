/* eslint-disable no-var */
/* eslint-disable no-param-reassign */
import React from 'react'
import { Button } from 'antd'

const Basic = () => {
  /**
   * @description 判断链表是否有环
   *
   * 使用快慢指针
   * */
  const hasCycle = (head) => {
    let fast = head
    let slow = head

    while (fast && fast.next) {
      fast = fast.next.next
      slow = slow.next

      if (fast === slow) {
        return true
      }
    }

    return false
  }

  // set工具类判断
  const hasCycle2 = (head) => {
    let node = head
    const set = new Set()

    while (node) {
      if (set.has(node)) {
        return true
      }
      set.add(node)
      node = node.next
    }

    return false
  }

  console.log(hasCycle, hasCycle2)

  return (
    <Button
      type="link"
      target="_blank"
      href="https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xnwzei"
    >
      环形链表
    </Button>
  )
}

export default Basic
