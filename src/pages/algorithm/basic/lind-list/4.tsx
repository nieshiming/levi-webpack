/* eslint-disable no-var */
/* eslint-disable no-param-reassign */
import React from 'react'
import { Button } from 'antd'

function ListNode(val, next) {
  this.val = val
  this.next = next
}

const Basic = () => {
  // 首先生成空的链表， 然后一次遍历list1, list2, 把小的链表取出来 添加至新的链表，  注意引用的顺序
  var mergeTwoLists = (list1, list2) => {
    const newLink = new ListNode(null, null)
    let head = newLink

    while (list1 && list2) {
      if (list1.val <= list2.val) {
        head.next = list1
        list1 = list1.next
      } else {
        head.next = list2
        list2 = list2.next
      }

      head = head.next
    }

    if (list1) {
      head.next = list1
    }
    if (list2) {
      head.next = list2
    }

    return newLink.next
  }

  console.log(mergeTwoLists)

  return (
    <Button
      type="link"
      target="_blank"
      href="https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xnnbp2"
    >
      合并两个有序链表
    </Button>
  )
}

export default Basic
