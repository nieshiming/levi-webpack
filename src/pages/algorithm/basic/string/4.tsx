/* eslint-disable no-unneeded-ternary */
/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react'
import { Button } from 'antd'

const Basic = () => {
  // 生成数组，排序，然后比较每个位置的值是否相等
  const fn = (s: string, t: string) => {
    const s_arr = []
    const t_arr = []
    for (let i = 0; i < s.length; i++) {
      s_arr.push(s[i])
    }
    s_arr.sort()

    for (let i = 0; i < t.length; i++) {
      t_arr.push(t[i])
    }
    t_arr.sort()

    for (let i = 0; i < Math.max(s_arr.length, t_arr.length); i++) {
      if (s_arr[i] !== t_arr[i]) {
        return false
      }
    }

    return true
  }

  // hashMap
  const fn2 = (s: string, t: string) => {
    const s_map = new Map()
    for (let i = 0; i < s.length; i++) {
      if (!s_map.get(s[i])) {
        s_map.set(s[i], 1)
      } else {
        s_map.set(s[i], s_map.get(s[i]) + 1)
      }
    }

    for (let i = 0; i < t.length; i++) {
      const count = s_map.get(t[i])
      if (!s_map.has(t[i])) {
        return false
      }

      s_map.set(t[i], count - 1)
      if (count - 1 === 0) {
        s_map.delete(t[i])
      }
    }

    return s_map.length === 0 ? true : false
  }

  console.log(fn('leetcode', 'nagaram'))
  console.log(fn2('leetcode', 'nagaram'))

  return (
    <Button
      type="link"
      target="_blank"
      href="https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xn96us"
    >
      有效的字母异位词
    </Button>
  )
}

export default Basic
