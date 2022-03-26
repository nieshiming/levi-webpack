/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/naming-convention */
import { Button } from 'antd'
import React, { FC } from 'react'

const Basic: FC = () => {
  const solution = (isBadVersion) => (n) => {
    let start = 1
    let mid = Math.floor(n / 2)

    while (mid < n) {
      if (isBadVersion(mid)) {
        n = mid
      } else {
        start = mid + 1
      }

      mid = Math.floor((start + n) / 2)
    }
    return mid
  }

  console.log(solution)

  return (
    <Button
      type="link"
      target="_blank"
      href="https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xnto1s/"
    >
      第一个错误的版本
    </Button>
  )
}

export default Basic
