import React from 'react'
import { Button } from 'antd'

export default () => {
  // 两个数组的交集
  const fn = (nums1: number[], nums2: number[]) => {
    // 暴力破解，双循坏 +_set    。。。。 击败5%
    // const set = new Set()
    // for (let i = 0; i < nums1.length; i++) {
    //   for (let j = 0; j < nums2.length; j++) {
    //     if (!set.has(nums2[j]) && nums1[i] === nums2[j]) {
    //       set.add(nums2[j])
    //     }
    //   }
    // }

    // return [...set]

    // 利用map   击败95%
    const result = []
    const map = new Map()
    for (let i = 0; i < nums1.length; i++) {
      map.set(nums1[i], true)
    }

    for (let j = 0; j < nums2.length; j++) {
      if (map.get(nums2[j])) {
        map.set(nums2[j], false)
        result.push(nums2[j])
      }
    }

    return result
  }

  // 两个数组的交集 II
  const fn2 = (nums1: number[], nums2: number[]) => {
    const result = []
    const map = new Map()
    for (let i = 0; i < nums1.length; i++) {
      map.set(nums1[i], (map.get(nums1[i]) || 0) + 1)
    }

    for (let j = 0; j < nums2.length; j++) {
      if (map.get(nums2[j])) {
        map.set(nums2[j], map.get(nums2[j]) - 1)
        result.push(nums2[j])
      }
    }

    return result
  }

  console.log(fn([1, 2, 2, 1], [2, 2]))
  console.log(fn2([1, 2, 2, 1], [2, 2]))

  return (
    <>
      <Button type="link" target="_blank" href="https://leetcode-cn.com/problems/intersection-of-two-arrays/">
        两个数组的交集
      </Button>
      <Button
        type="link"
        target="_blank"
        href="https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/x2y0c2/"
      >
        两个数组的交集 II
      </Button>
    </>
  )
}
