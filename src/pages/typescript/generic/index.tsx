import React, { FC } from 'react'
import { Card } from 'antd'

function show<T, X>(
  name: T,
  age: X,
): Array<{
  name: T
  age: X
}> {
  return [{ name, age }]
}

/** 部分使用泛型 */
function levis<T>(name: T[]): number {
  return name.length
}

/** 泛型接口 */
interface I<T> {
  (arg: T[]): number
}

/** 泛型表达式 */
const levia: <T>(name: T[]) => number = levis // 函数表达式

const levib: I<string> = levis

const Baisc: FC = () => (
  <Card>
    <h4>{JSON.stringify(show<string, number>('levis', 20))}</h4>
    <h4>{levia<number>([1, 2, 3])}</h4>
    <h4>{levib(['a', 'b', 'c', 'd'])}</h4>
  </Card>
)

export default Baisc
