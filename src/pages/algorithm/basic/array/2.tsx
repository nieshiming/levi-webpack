import React, { FC } from 'react'

const basic: FC = () => {
  /**
   * @description 940ms
   * 主要是 每次函数执行 slice、reduce影响
   * */
  const fn = (arr: number[]) => {
    let idx = -1
    if (arr.length < 3) return idx

    const sum = arr.reduce((pre, cur) => pre + cur, 0)

    arr.forEach((item, index) => {
      const splitArr = arr.slice(0, index)
      const newSum = splitArr.reduce((pre, cur) => pre + cur, 0)

      if ((sum - item) / 2 === newSum && idx === -1) {
        idx = index
      }
    })

    return idx
  }

  /**
   * @description 改进版本 70ms
   */
  const fn2 = (arr: number[]) => {
    let idx = -1
    let leftNum = 0
    if (arr.length < 3) return idx

    const sum = arr.reduce((pre, cur) => pre + cur, 0)

    for (let i = 0; i < arr.length; i++) {
      if ((sum - arr[i]) / 2 === leftNum) {
        idx = i
        break
      } else {
        leftNum += arr[i]
      }
    }

    return idx
  }

  console.log(fn2([-1, -1, 0, 0, -1, -1]))
  console.log(fn)

  return <>寻找中心索引</>
}

export default basic

/**
 * @description 我们是这样定义数组中心索引的：数组中心索引的左侧所有元素相加的和等于右侧所有元素相加的和。
 * */
