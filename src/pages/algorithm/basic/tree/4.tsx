import React from 'react'
import { Button } from 'antd'

const Basic = () => {
  // 深度优先遍历 ，先序遍历
  const levelOrder = (root) => {
    if (!root) {
      return []
    }
    const resultArr = []
    const deep = (node, level) => {
      if (!node) {
        return
      }

      if (!resultArr[level]) {
        resultArr[level] = []
      }

      resultArr[level].push(node.val)
      deep(node.left, level + 1)
      deep(node.right, level + 1)
    }

    deep(root, 0)
    return resultArr
  }

  // 广度优先遍历
  const levelOrder2 = (root) => {
    if (!root) {
      return []
    }

    const arr = []
    const nodeList = [root]

    while (nodeList.length) {
      const res = []
      let size = nodeList.length
      while (size) {
        const node = nodeList.pop()
        res.push(node.val)
        if (node.left) {
          nodeList.unshift(node.left)
        }

        if (node.right) {
          nodeList.unshift(node.right)
        }
        size--
      }
      arr.push(res)
    }

    return arr
  }

  console.log(levelOrder, levelOrder2)

  return (
    <Button
      type="link"
      target="_blank"
      href="https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xnldjj"
    >
      二叉树的层序遍历
    </Button>
  )
}

export default Basic
