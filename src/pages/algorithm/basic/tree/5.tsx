import React from 'react'
import { Button } from 'antd'

const Basic = () => {
  const sortedArrayToBST = (nums) => {
    if (nums.length === 0) {
      return null
    }

    const idx = Math.floor(nums.length / 2)
    const node = new TreeNode(nums[idx], null, null)

    if (idx > 0) {
      node.left = sortedArrayToBST(nums.slice(0, idx))
    }
    if (idx + 1 < nums.length) {
      node.right = sortedArrayToBST(nums.slice(idx + 1))
    }

    return node
  }

  console.log(sortedArrayToBST)

  return (
    <Button
      type="link"
      target="_blank"
      href="https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xninbt"
    >
      将有序数组转换为二叉搜索树
    </Button>
  )
}

export default Basic
