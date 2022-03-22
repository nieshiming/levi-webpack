/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
import React from 'react'
import { Button } from 'antd'

const Basic = () => {
  // 循坏遍历
  const fn = (strArr: string[]) => {
    const length = strArr.length
    for (let i = 0; i < strArr.length; i++) {
      if (i < length / 2) {
        const temp = strArr[length - 1 - i]
        strArr[length - 1 - i] = strArr[i]
        strArr[i] = temp
      }
    }

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
      href="https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xnhbqj"
    >
      反转字符串
    </Button>
  )
}

export default Basic
