import React from 'react'
import { Button } from 'antd'

const Basic = () => {
  // 神奇的脑回路
  /**
   * 
    - 节点的左子树只包含 小于 当前节点的数。
    - 节点的右子树只包含 大于 当前节点的数。
    - 所有左子树和右子树自身必须也是二叉搜索树。
  */
  const isValidBST = (root) => {
    const deep = (node, max, min) => {
      if (!node) {
        return true
      }

      if (node.val <= min || node.val >= max) {
        return false
      }

      return deep(node.left, node.val, min) && deep(node.right, max, node.val)
    }

    return deep(root, Infinity, -Infinity)
  }

  /**
    二叉搜索采用中序遍历得到是递增数列
    采用中序遍历，把结果存放在数组里面， 然后比较数组是否为升序数组
   */
  const isValidBST2 = (root) => {
    const arr = []
    const deep = (node) => {
      if (!node) {
        return
      }

      deep(node.left)
      arr.push(node.val)
      deep(node.right)
    }

    deep(root)

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] >= arr[i + 1]) {
        return false
      }
    }

    return true
  }

  console.log(maxDepth, isValidBST, isValidBST2)

  return (
    <Button
      type="link"
      target="_blank"
      href="https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xn08xg"
    >
      验证二叉搜索树(BST🌲)
    </Button>
  )
}

export default Basic
