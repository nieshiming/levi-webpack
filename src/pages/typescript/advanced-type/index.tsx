import React, { FC } from 'react'
import { Card } from 'antd'

/**
 * @description 链接地址
 * https://juejin.im/post/5c2f87ce5188252593122c98
 *  */

interface I {
  name: string
  age: number
}

/** 接受泛型 */
type Levis<T> = T extends keyof I ? true : false
type La = Levis<'name'>

type Obj = {
  readonly [k in keyof I]?: string
}

/** pick */
type Nie = {
  name: string
  age: number
  adress: string
  alone: boolean
}

export type Ns = Pick<Nie, 'name'> // {name: string}

/**
 * @description typeof type对应
 * type xx = typeof Obj  === 获取对象所对应的key类型
 */
const objExamplate = { name: 'levi' }
type Type1 = typeof objExamplate // 获取到类型 {name: string}

export type Shi = Readonly<Type1>

/**
 * Omit  有时候我们想要继承某个接口，但是又需要在新接口中将某个属性给去掉
 *  */

export type Foo = Omit<{ name: string; age: number }, 'name'>

/**
 * @description Mutable 将T中的readonly去除
 * */
type Mutable<T> = {
  -readonly [p in keyof T]: T[p]
}

export type Mu = Mutable<Obj>

/**
 * @description Deferred
 * */
type Deferred<T> = {
  [p in keyof T]: Promise<T[p]>
}
type De = Deferred<typeof objExamplate>

const Basic: FC = () => {
  const name: La = true
  const objs: Obj = {
    name: 'levis',
    age: '20',
  }
  // objs.name = 'adsad'   readonly 后不能再继续赋值

  const a: De = {
    name: new Promise<string>((resolve) => resolve('levis')),
  }

  console.log(a)

  return (
    <Card>
      <h4>高级类型 {`${name}`}</h4>
      <h4>{JSON.stringify(objs)}</h4>
    </Card>
  )
}

export default Basic
