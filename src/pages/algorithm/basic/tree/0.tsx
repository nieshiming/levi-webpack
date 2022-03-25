import React from 'react'
import { Button } from 'antd'

const Basic = () => {
  // 深度优先遍历
  const dfsDepth = (root) => {
    const arr = []

    const deep = (node) => {
      if (!node) {
        return
      }

      // 先序遍历: 先遍历当前节点，在遍历左节点=> 右节点
      //   arr.push(node.val)
      //   deep(node.left)
      //   deep(node.right)

      /**
       * 中序遍历： 先遍历左节点，在遍历当前节点=>右节点
       * 对于BFS树使用中序遍历， 生成得到的是 升序数据
       * */
      deep(node.left)
      arr.push(node.val)
      deep(node.right)

      //   // 后续遍历： 先遍历左节点，在遍历右节点=> 当前节点
      //   deep(node.left)
      //   deep(node.right)
      //   arr.push(node.val)
    }

    deep(root)
  }

  // 广度优先遍历, 使用队列： 先入先出
  const bfsDepth = (root) => {
    if (!root) {
      return []
    }
    const arr = []
    arr.push(root)
    while (arr.length) {
      const node = arr.pop()
      arr.push(node.val)

      if (node.left) {
        arr.unshift(node.left)
      }

      if (node.right) {
        arr.unshift(node.right)
      }
    }

    return []
  }

  console.log('深度优先遍历:', dfsDepth)
  console.log('广度优先遍历:', bfsDepth)

  return (
    <Button
      type="link"
      target="_blank"
      href="https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xnd69e"
    >
      二叉树遍历（深度优先遍历 && 广度优先遍历）
    </Button>
  )
}

export default Basic
