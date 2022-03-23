/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
import React from 'react'
import { Button } from 'antd'

const Basic = () => {
  // 循坏遍历
  const fn = (strArr: string[]) => {
    // 双指针
    let left = 0
    let right = strArr.length - 1
    while (left < right) {
      const temp = strArr[right]
      strArr[right] = strArr[left]
      strArr[left] = temp

      left++
      right--
    }

    console.log(strArr)
    return strArr
  }

  fn(['h', 'e', 'l', 'l', 'o'])

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
