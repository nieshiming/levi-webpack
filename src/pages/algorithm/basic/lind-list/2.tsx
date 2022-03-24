/* eslint-disable no-param-reassign */
import React from 'react'
import { Button } from 'antd'

const Basic = () => {
  // 先计算长度，然后计算出，node前一个位置的元素
  const deleteNode = (head, n) => {
    let length = 0
    let node = head
    while (node) {
      length++
      node = node.next
    }

    if (n === length) {
      return head.next
    }

    let mapCount = length - n
    while (mapCount > 0) {
      node = node ? node.next : head
      mapCount--
    }

    node.next = node.next.next
    return head
  }

  // 双指针
  const deleteNode2 = (head, n) => {
    let fast = head
    let slow = head

    for (let i = 0; i < n; i++) {
      fast = fast.next
    }

    if (fast === null) {
      return head.next
    }

    while (fast.next) {
      fast = fast.next
      slow = slow.next
    }

    slow.next = slow.next.next

    return head
  }

  console.log(deleteNode, deleteNode2)

  return (
    <Button
      type="link"
      target="_blank"
      href="https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xn2925"
    >
      删除链表的倒数第N个节点
    </Button>
  )
}

export default Basic
