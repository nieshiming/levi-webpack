import { Card } from 'antd'
import React, { FC } from 'react'

/**
 * @description 函数
 * */
const Fn: FC = () => <Card>函数类型</Card>

/** 接口定义函数类型 */
interface I {
  (name: string, age?: number): boolean
}

export const levia: (name: string, age?: number) => boolean = (name: string, age: number = 18): boolean => {
  console.log(name, age)
  return !!name
}

/** 使用接口 */
export const levib: I = (name: string = 'levis', age?: number): boolean => {
  console.log(name, age)
  return false
}

/** 剩余参数 */
export const show = (name: string, age: number, ...reset: string[]) => {
  console.log(name, age, ...reset)
}

export default Fn
