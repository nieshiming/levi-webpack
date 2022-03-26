/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/naming-convention */
import { Button } from 'antd'
import React, { FC } from 'react'

const Basic: FC = () => {
  // JavaScript 先把nums2压入nums1后m位，然后排序
  const merge = (nums1, m, nums2, n) => {
    for (let i = m; i < m + n; i++) {
      nums1[i] = nums2[i - m]
    }

    for (let i = 0; i < nums1.length - 1; i++) {
      for (let j = i + 1; j < nums1.length; j++) {
        if (nums1[i] > nums1[j]) {
          const temp = nums1[j]
          nums1[j] = nums1[i]
          nums1[i] = temp
        }
      }
    }
  }

  const merge2 = (nums1, m, nums2, n) => {
    let cur = m + n - 1
    let nums1_idx = m - 1
    let nums2_idx = n - 1

    while (nums2_idx >= 0) {
      if (nums1[nums1_idx] >= nums2[nums2_idx]) {
        nums1[cur] = nums1[nums1_idx]
        nums1_idx--
      } else {
        nums1[cur] = nums2[nums2_idx]
        nums2_idx--
      }
      cur--
    }

    if (nums2_idx >= 0) {
      for (let i = 0; i <= nums2_idx; i++) {
        nums1[i] = nums2[i]
      }
    }
  }

  console.log(merge, merge2)

  return (
    <Button
      type="link"
      target="_blank"
      href="https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xnumcr/"
    >
      合并两个有序数组
    </Button>
  )
}

export default Basic
