/* eslint-disable no-param-reassign */
import React from 'react'
import { Button } from 'antd'

const Basic = () => {
  /**
   * Definition for singly-linked list.
   * function ListNode(val) {
   *     this.val = val;
   *     this.next = null;
   * }
   */
  /**
   * @param {ListNode} node
   * @return {void} Do not return anything, modify node in-place instead.
   */
  const deleteNode = (node) => {
    node.val = node.next.val
    node.next = node.next.next
  }

  console.log(deleteNode)

  return (
    <Button
      type="link"
      target="_blank"
      href="https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xnarn7"
    >
      删除链表中的节点
    </Button>
  )
}

export default Basic
