import React from 'react'
import { Button } from 'antd'

const Basic = () => {
  // 深度优先遍历
  const maxDepth = (root) => {
    const deep = (node) => {
      if (!node) {
        return 0
      }

      const leftCount = deep(node.left) + 1
      const rightCount = deep(node.right) + 1

      // 返回最大深度  Math.max
      // 返回最小深度  Math.min
      return Math.max(leftCount, rightCount)
    }

    return deep(root)
  }

  // 广度优先遍历
  const maxDepth2 = (root) => {
    if (!root) {
      return 0
    }

    let count = 0
    const nodeList = []
    nodeList.unshift(root)

    while (nodeList.length) {
      count++

      // 拿到当前层, 计算每层的次数
      let size = nodeList.length

      while (size) {
        const node = nodeList.pop()
        if (node.left) {
          nodeList.unshift(node.left)
        }

        if (node.right) {
          nodeList.unshift(node.right)
        }

        size--
      }
    }

    return count
  }

  console.log(maxDepth, maxDepth2)

  return (
    <Button
      type="link"
      target="_blank"
      href="https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xnd69e"
    >
      二叉树的最大深度
    </Button>
  )
}

export default Basic
