/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/naming-convention */
import { Button } from 'antd'
import React, { FC } from 'react'

const Basic: FC = () => {
  /**
 * @param {number} n
 * @return {number}

    1层 1种
    2层 2， 1 + 1 2种

    3层 
        1 + (3 - 1)2层  2种
        2 + (3 - 2)1层  1种

    4层
        1 + (4 - 1)层  3层 3种
        2 + (4 - 2)层  2层 2种

    5层
        1 + 4层   
        2 + 3层
 */

  const climbStairs = (n) => {
    const stepObj = {
      1: 1,
      2: 2,
    }

    for (let i = 3; i <= n; i++) {
      stepObj[i] = stepObj[i - 1] + stepObj[i - 2]
    }

    return stepObj[n]
  }

  console.log(climbStairs)

  return (
    <Button
      type="link"
      target="_blank"
      href="https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xn854d/"
    >
      爬楼梯
    </Button>
  )
}

export default Basic
