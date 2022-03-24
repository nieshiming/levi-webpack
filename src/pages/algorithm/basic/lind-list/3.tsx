/* eslint-disable no-var */
/* eslint-disable no-param-reassign */
import React from 'react'
import { Button } from 'antd'

const Basic = () => {
  // 利用栈存储每个链表的节点，然后依次倒序遍历，生成新的链接，注意要把原来第一个节点的node.next置为空
  const reverseList = (head) => {
    if (!head) {
      return head
    }

    const arr = []

    let node = head
    while (node) {
      arr.push(node)
      node = node.next
    }

    node = arr.pop()
    const newHead = node
    while (arr.length) {
      const item = arr.pop()
      node.next = item
      node = node.next // js引用指向,原来node的路径
    }

    node.next = null
    return newHead
  }

  // 依次取出链表首尾元素，后续每次取元素， 当前头节点next指向原来链表prev。 然后交换prev 和新的head
  const reverseList2 = (head) => {
    let prev = null
    while (head) {
      const nextNode = head.next
      head.next = prev
      prev = head
      head = nextNode
    }

    return prev
  }

  console.log(reverseList, reverseList2)

  return (
    <Button
      type="link"
      target="_blank"
      href="https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xnnhm6"
    >
      反转链表
    </Button>
  )
}

export default Basic
