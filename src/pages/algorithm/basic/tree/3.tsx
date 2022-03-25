import React from 'react'
import { Button } from 'antd'

const Basic = () => {
  /**
   * @description 广度优先遍历，分层比较。 更加优雅
   * */
  const isSymmetric = (root) => {
    if (!root) {
      return true
    }

    const arr = []
    arr.push([root.left, root.right])

    while (arr.length) {
      const [left, right] = arr.pop()
      if (!left && !right) {
        // eslint-disable-next-line no-continue
        continue
      }
      if (!left || !right || left.val !== right.val) {
        return false
      }

      arr.unshift([left.left, right.right])
      arr.unshift([left.right, right.left])
    }

    return true
  }

  const isSymmetric2 = (root) => {
    if (!root) {
      return true
    }

    const deep = (nodeLeft, nodeRight) => {
      // 比较当前左右节点值， 如果都不存在，则表示无子节点，直接返回true
      if (!nodeLeft && !nodeRight) {
        return true
      }

      // 判断左右节点值是否相等
      if (!nodeLeft || !nodeRight || nodeLeft.val !== nodeRight.val) {
        return false
      }

      return deep(nodeLeft.left, nodeRight.right) && deep(nodeLeft.right, nodeRight.left)
    }

    return deep(root.left, root.right)

    return true
  }

  console.log(isSymmetric, isSymmetric2)

  return (
    <Button
      type="link"
      target="_blank"
      href="https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xn7ihv"
    >
      对称二叉树
    </Button>
  )
}

export default Basic
